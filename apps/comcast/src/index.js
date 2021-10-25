import React from "react";
import ReactDOM from "react-dom";
import { store } from "@mono-repo/base-redux";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";
import "./index.css";

/**
 * Initialize a PublicClientApplication instance which is provided to the MsalProvider component
 * We recommend initializing this outside of your root component to ensure it is not re-initialized on re-renders
 */
const msalInstance = new PublicClientApplication(msalConfig);

/**
 * We recommend wrapping most or all of your components in the MsalProvider component. It's best to render the MsalProvider as close to the root as possible.
 */

ReactDOM.render(
	<React.StrictMode>
		<MsalProvider instance={msalInstance}>
			<Provider store={store}>
				<App />
			</Provider>
		</MsalProvider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();