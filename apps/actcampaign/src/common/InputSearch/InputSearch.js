import React from "react";
import loopSearch from "../../assets/images/common/search.png";
import "./InputSearch.css";

export const InputSearch = ({
	placeholder,
	type,
	name,
	value,
	defaultValue,
	onChange,
}) => {
	return (
		<div className="input--search--main--container">
			<div className="input--search--main--container--text">
				<input
					className="input--search--main--container--text--input"
					placeholder={placeholder}
					type={type}
					name={name}
					defaultValue={defaultValue}
					value={value}
					onChange={onChange}
				/>
			</div>
			<div className="input--search--main--container--loop">
				<img src={loopSearch} alt="..." />
			</div>
		</div>
	);
};
