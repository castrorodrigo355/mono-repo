import React from "react";
import user from "../../assets/images/dashboard/userIcon.png";
import "./UserIcon.css";

export const UserIcon = ({ onClick }) => {
	return (
		<div className="user--icon--main--container" onClick={onClick}>
			<img src={user} alt="..." />
		</div>
	);
};
