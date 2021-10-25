import React from "react";
import previuos from "../../assets/images/common/previuos.png";
import "./Previous.css";

export const Previous = ({ onClick }) => {
	return (
		<div className="previuos--main--container" onClick={onClick}>
			<div className="previuos--main--container--image">
				<img src={previuos} alt="..." />
			</div>
			<div className="previuos--main--container--text">Previous</div>
		</div>
	);
};
