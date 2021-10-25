import React from "react";
import "./ControlButton.css";

export const ControlButton = ({ icon, onClick }) => {
	return (
		<button className="control--button--main--container" onClick={onClick}>
			<img
				className="control--button--main--container--button"
				src={icon}
				alt="..."
			/>
		</button>
	);
};
