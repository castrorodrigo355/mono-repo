import React, { useEffect } from "react";
import config from "../config";
import { App } from "../views/App/App";
import { Security } from "@okta/okta-react";
import { useHistory } from "react-router-dom";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";

const oktaAuth = new OktaAuth(config.oidc);

export const ContainerApp = () => {
	const history = useHistory();
	const restoreOriginalUri = async (oktaAuth, originalUri) => {
		history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
	};

	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	return (
		<Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
			<App />
		</Security>
	);
};
