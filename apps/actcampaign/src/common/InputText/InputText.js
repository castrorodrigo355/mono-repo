import React from "react";
import "./InputText.css";

export const InputText = ({
	label,
	placeholder,
	type,
	disabled,
	name,
	value,
	onChange,
}) => {
	return (
		<div className="input--text--main">
			<label className="input--text--main--label">{label}</label>
			<input
				className="input--text--main--input"
				placeholder={placeholder}
				type={type}
				disabled={disabled}
				name={name}
				value={value}
				onChange={onChange}
				autoComplete="off"
			/>
		</div>
	);
};
