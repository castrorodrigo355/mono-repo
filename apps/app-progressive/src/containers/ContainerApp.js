import React, { useEffect } from "react";
import App from "../views/App/App";
const ContainerApp = () => {
	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	return <App />;
};

export default ContainerApp;
