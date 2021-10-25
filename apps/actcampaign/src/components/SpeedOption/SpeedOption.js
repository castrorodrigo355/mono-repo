import React from "react";
import base from "../../assets/images/reproducer/base.png";
import "./SpeedOption.css";

export const SpeedOption = ({ icon, onClick }) => (
	<div className="base--speed" onClick={onClick}>
		<img src={base} alt="..." />
		<img className="base--speed--number" src={icon} alt="..." />
	</div>
);
