import React, { useState } from "react";
import { InputSearch } from "../../common/InputSearch/InputSearch";

export const FormSearch = () => {
	const [data, setData] = useState({ name: "" });
	const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

	return (
		<InputSearch
			placeholder="Search"
			type="text"
			name={"name"}
			value={data.name}
			onChange={onChange}
		/>
	);
};
