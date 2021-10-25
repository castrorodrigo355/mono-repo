import React from "react";
import "./StaticDataPodcast.css";

export const StaticDataPodcast = ({ episode }) => (
	<React.Fragment>
		<div className="episode--reproduce--container--view--data">
			<img
				className="episode--reproduce--container--view--data--image"
				src={episode.image}
				alt="..."
			/>
		</div>
		<div className="episode--reproduce--container--view--title">
			{episode.title}
		</div>
		<div className="episode--reproduce--container--view--index">
			EPISODE {episode.number}
		</div>
		<div className="episode--reproduce--container--view--creator">
			{episode.creator}
		</div>
	</React.Fragment>
);
