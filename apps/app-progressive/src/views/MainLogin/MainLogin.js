import React, { useState } from "react";
import logo from "../../assets/images/login/messyLogo.png";
import image from "../../assets/images/login/messyImg.png";
import { Button } from "../../common/Button/Button";
import { InputText } from "../../common/InputText/InputText";
import { BlankDisplay } from "../../components/BlankDisplay/BlankDisplay";
import { title } from "./constants";
import "./MainLogin.css";

export const MainLogin = () => {
	const initialState = { email: "" };
	const [data, setData] = useState(initialState);
	const onChange = ({ target: { name, value } }) =>
		setData({ ...data, [name]: value });

	const onClickButton = async () => {
		try {
			const res = await fetch("http://localhost:7000/users", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			if (res.status === 200) {
				const { url } = await res.json();
				window.location.href = url;
			} else {
				console.log("ERROR !!!");
			}
		} catch (error) {
			console.log("ERROR: ", error);
		}
	};

	return (
		<div className="main--login--main--container">
			<div className="main--login--main--container--company">
				<img src={logo} alt="..." />
				<img src={image} alt="..." />
			</div>
			<div className="main--login--main--container--blank--bottom">
				<BlankDisplay title={title}>
					<div className="main--login--main--container--blank--bottom--element">
						<InputText
							label="Email"
							placeholder=""
							type="email"
							disabled={false}
							name="email"
							value={data.email}
							onChange={onChange}
						/>
					</div>
					<div className="main--login--main--container--blank--bottom--element">
						<Button
							title="Log in"
							type="submit"
							color="#19cca3"
							disabled={data.email === ""}
							onClick={onClickButton}
						/>
					</div>
				</BlankDisplay>
			</div>
		</div>
	);
};
