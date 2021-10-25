import React from "react";
import normal10 from "../../assets/images/reproducer/1X.png";
import normal15 from "../../assets/images/reproducer/15X.png";
import normal20 from "../../assets/images/reproducer/2X.png";
import { SpeedOption } from "../SpeedOption/SpeedOption";
import "./HighSpeedOptions.css";

export const HighSpeedOptions = ({ selectIcon }) => {
	const options = [
		{ id: 1, icon: normal10, click: () => selectIcon(normal10, "1X") },
		{ id: 2, icon: normal15, click: () => selectIcon(normal15, "1.5X") },
		{ id: 3, icon: normal20, click: () => selectIcon(normal20, "2X") },
	];

	return (
		<div className="high--speed--options">
			{options.map((option) => (
				<SpeedOption
					key={option.id}
					icon={option.icon}
					onClick={option.click}
				/>
			))}
		</div>
	);
};
