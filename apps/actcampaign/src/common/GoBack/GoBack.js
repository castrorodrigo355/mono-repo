import React from "react";
import goBack from "../../assets/images/showDetail/goBack.png";
import "./GoBack.css";

export const GoBack = ({ onClick }) => {
	return (
		<div className="episode--reproduce--container--goback" onClick={onClick}>
			<img src={goBack} alt="..." />
		</div>
	);
};
