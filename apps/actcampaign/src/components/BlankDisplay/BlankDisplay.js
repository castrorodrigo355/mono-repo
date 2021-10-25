import React from "react";
import "./BlankDisplay.css";

export const BlankDisplay = ({ title, children }) => {
	return (
		<div className="blank--display--main--container">
			{title && (
				<div className="blank--display--main--container--header">{title}</div>
			)}
			<div className="blank--display--main--container--body">{children}</div>
		</div>
	);
};
