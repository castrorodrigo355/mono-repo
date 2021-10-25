import React from "react";
import home from "../../assets/images/bottomNav/home.png";
// import search from "../../assets/images/bottomNav/search.png";
import podcast from "../../assets/images/bottomNav/podcast.png";
import { useHistory } from "react-router-dom";
import "./BottomNav.css";

export const BottomNav = () => {
	const items = [
		{ id: 0, icon: home, path: "/" },
		// { id: 1, icon: search, path: "/search" },
		{ id: 2, icon: podcast, path: "/podcasts" },
	];

	return (
		<div className="bottom--nav--main--container">
			{items.map((item) => (
				<NavItem key={item.id} item={item} />
			))}
		</div>
	);
};

const NavItem = ({ item }) => {
	const history = useHistory();
	return (
		<div
			className="nav--item--main--container"
			onClick={() => history.push(item.path)}
		>
			<img src={item.icon} alt="..." />
		</div>
	);
};
