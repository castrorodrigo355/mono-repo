import React from "react";
import play from "../../assets/images/episode/play.png";
import moment from "moment";
import background from "../../assets/images/episode/background.png";
import { useHistory } from "react-router-dom";
import { encodeData } from "./helpers";
import "./Episode.css";

export const Episode = ({ episode, image, index, creator }) => {
	const history = useHistory();

	const selectEpisode = () => {
		const data = encodeData(episode, image, index, creator);
		history.push(`/episode/${data}`);
	};
	return (
		<div className="episode--main--container">
			<div className="episode--main--container--image">
				<img src={image} alt="..." />
			</div>
			<div className="episode--main--container--detail">
				<div className="episode--main--container--detail--title">
					{episode.title}
				</div>
				<div className="episode--main--container--detail--index">
					Episode {index + 1}
				</div>
				<div className="episode--main--container--detail--date">
					{`${creator} ${moment(episode.released_at).format("ll")}`}
				</div>
			</div>
			<div className="episode--main--container--play">
				<img
					className="episode--main--container--play--background"
					src={background}
					alt="..."
				/>

				<div
					className="episode--main--container--play--background--internal"
					onClick={selectEpisode}
				>
					<img
						className="episode--main--container--play--background--internal--icon"
						src={play}
						alt="..."
					/>
				</div>
			</div>
		</div>
	);
};
