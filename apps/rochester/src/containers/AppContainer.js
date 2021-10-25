import React from "react";
import { connect } from "react-redux";
import { openViewSidebar } from "@mono-repo/base-redux";
import App from "../App";

const mapDispatchToProps = (dispatch) => ({
	openViewSidebar: () => dispatch(openViewSidebar()),
});

const AppContainer = (props) => <App {...props} />;

export default connect(null, mapDispatchToProps)(AppContainer);
