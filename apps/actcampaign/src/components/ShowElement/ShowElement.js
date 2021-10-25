import React from "react";
import background from "../../assets/images/showElement/background.png";
import play from "../../assets/images/showElement/play.png";
import "./ShowElement.css";

export const ShowElement = ({ show, onClick }) => {
	return (
		<div className="show--element--main--container">
			<img
				className="show--element--main--container--image"
				src={show.image_url}
				alt="..."
			/>
			<div
				className="show--element--main--container--background"
				onClick={onClick}
			>
				<img
					className="show--element--main--container--background--image"
					src={background}
					alt="..."
				/>
				<div className="show--element--main--container--background--play">
					<img
						className="show--element--main--container--background--play--image"
						src={play}
						alt="..."
					/>
				</div>
			</div>
		</div>
	);
};
