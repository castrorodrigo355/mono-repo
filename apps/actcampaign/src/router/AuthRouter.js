import React from "react";
import { LoginCallback } from "@okta/okta-react";
import { Route, Switch } from "react-router-dom";
import { ClientLogin } from "../views/ClientLogin/ClientLogin";

export const AuthRouter = () => (
	<div style={{ height: "100vh" }}>
		<Switch>
			<Route exact path="/auth/login" component={ClientLogin} />
			<Route exact path="/auth/login/callback" component={LoginCallback} />
		</Switch>
	</div>
);
