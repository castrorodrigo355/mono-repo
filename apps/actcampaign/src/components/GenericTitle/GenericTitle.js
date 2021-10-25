import React from "react";
import "./GenericTitle.css";

export const GenericTitle = ({ title, browserType, onClick }) => {
	return (
		<div className="generic--title--main--container">
			{title}
			{browserType === "web" && onClick && (
				<div
					className="generic--title--main--container--option"
					onClick={onClick}
				>
					Show all
				</div>
			)}
		</div>
	);
};
