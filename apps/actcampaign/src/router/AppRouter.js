import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { Dashboard } from "../views/Dashboard/Dashboard";
import { ShowDetail } from "../views/ShowDetail/ShowDetail";
import { SecureRoute } from "@okta/okta-react";
import { setBrowserType } from "../redux/ui/actions";
import { getBrowserType } from "../utils/utils";
import { Switch, Redirect } from "react-router-dom";
import { EpisodeReproduce } from "../views/EpisodeReproduce/EpisodeReproduce";
import { useSelector, useDispatch } from "react-redux";
import "./RouterStyles.css";

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { browserType } = useSelector((state) => state.ui);

	useEffect(() => {
		const browser = getBrowserType();
		dispatch(setBrowserType(browser));
	}, []);

	return (
		<div className="router--styles--main--container">
			{browserType && browserType === "web" && <Navbar />}
			<Switch>
				<SecureRoute exact path="/shows" component={Dashboard} />
				<SecureRoute exact path="/show/:id" component={ShowDetail} />
				<SecureRoute path="/episode/:data" component={EpisodeReproduce} />
				<Redirect to="/shows" />
			</Switch>
			{browserType && browserType === "mobile" && (
				<div
					className={`router--styles--main--container--bottom--nav ${
						true ? "open--bottom--nav" : ""
					}`}
				>
					<BottomNav />
				</div>
			)}
		</div>
	);
};
