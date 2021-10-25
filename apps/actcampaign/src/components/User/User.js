import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import "./User.css";

export const User = () => {
	const { authState, oktaAuth } = useOktaAuth();
	const logout = async () => oktaAuth.signOut();

	return (
		<div className="user--main--container">
			<div className="user--main--container--name">{"Rodrigo"}</div>
			<div className="user--main--container--email">
				{"castrorodrigo355@gmail.com"}
			</div>
			<div className="user--main--container--logout" onClick={logout}>
				Log out
			</div>
		</div>
	);
};
