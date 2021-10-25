import React from "react";
import "./Button.css";

export const Button = ({ title, type, disabled, color, onClick }) => {
	return (
		<div className="button--main--container">
			<button
				type={type}
				disabled={disabled}
				style={{ background: disabled ? "rgb(211, 208, 208)" : color }}
				onClick={onClick}
			>
				{title}
			</button>
		</div>
	);
};
