import React, { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";
import { Switch, Redirect } from "react-router-dom";
import { PublicRoute } from "../../router/PublicRoute";
import { AuthRouter } from "../../router/AuthRouter";
import { PrivateRoute } from "../../router/PrivateRoute";
import { AppRouter } from "../../router/AppRouter";

export const App = () => {
	const { authState, oktaAuth } = useOktaAuth();
	const [userInfo, setUserInfo] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (authState?.isAuthenticated && !userInfo) {
			setIsAuthenticated(true);
			oktaAuth.getUser().then((info) => {
				setUserInfo(info);
				setIsAuthenticated(true);
				setLoading(false);
			});
		} else if (!authState?.isAuthenticated) {
			setIsAuthenticated(false);
			setLoading(false);
			setUserInfo(null);
		}
	}, [authState, oktaAuth]);

	// const login = async () => await oktaAuth.signInWithRedirect();
	// const logout = async () => oktaAuth.signOut();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Switch>
			<PublicRoute
				path="/auth"
				isAuthenticated={isAuthenticated}
				component={AuthRouter}
			/>
			<PrivateRoute
				path="/"
				isAuthenticated={isAuthenticated}
				component={AppRouter}
			/>
			<Redirect to="/" />
		</Switch>
	);
};
