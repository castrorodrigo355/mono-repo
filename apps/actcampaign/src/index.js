import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./polyfills";
import "./index.css";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import { ContainerApp } from "./containers/ContainerApp";
import { store } from "./store/store";

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
	<Provider store={store}>
		<Router>
			<ContainerApp />
		</Router>
	</Provider>,
	document.getElementById("root"),
);

registerServiceWorker();

// rodrigoct@southteams.com
// Eltraidor_1_test123
