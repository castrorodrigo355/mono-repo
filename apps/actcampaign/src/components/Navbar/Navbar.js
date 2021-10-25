import React, { useState } from "react";
import arrow from "../../assets/images/common/arrow.png";
import companyLogo from "../../assets/images/login/actCampaign.png";
import { useOktaAuth } from "@okta/okta-react";
import { UserIcon } from "../UserIcon/UserIcon";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const history = useHistory();
	const [openOptions, setOpenOptions] = useState(false);
	const { authState, oktaAuth } = useOktaAuth();

	const logout = async () => oktaAuth.signOut();
	const userOptions = [{ id: 1, description: "Logout" }];

	return (
		<div className="navbar--main--container">
			<div
				className="navbar--main--container--company"
				onClick={() => history.push(`/`)}
			>
				<CompanyLogo />
			</div>
			<div className="navbar--main--container--user">
				<div className="navbar--main--container--user--name">{"Rodrigo"}</div>
				<div className="navbar--main--container--user--icon">
					<UserIcon onClick={() => setOpenOptions((x) => !x)} />
				</div>
				<div
					className="navbar--main--container--user--options"
					onClick={() => setOpenOptions((x) => !x)}
				>
					<img src={arrow} alt="..." />
					{openOptions && (
						<div className="navbar--main--container--user--options--list">
							{userOptions.map((element) => (
								<NavRoute key={element.id} element={element} onClick={logout} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const CompanyLogo = ({}) => (
	<div className="navbar--main--container--company--image">
		<img
			src={companyLogo}
			alt="..."
			className="navbar--main--container--company--image--logo"
		/>
	</div>
);

const NavRoute = ({ element, onClick }) => (
	<div
		className="navbar--main--container--company--routes--item"
		onClick={onClick}
	>
		{element.description}
	</div>
);
