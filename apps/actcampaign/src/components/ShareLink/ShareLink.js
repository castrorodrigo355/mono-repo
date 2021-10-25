import React from "react";
import upload from "../../assets/images/user/upload.png";
import "./ShareLink.css";

export const ShareLink = ({ onClick }) => {
	return (
		<button className="share--link--main--container" onClick={onClick}>
			<div className="share--link--main--container--logo">
				<img src={upload} alt="..." />
			</div>
			<div className="share--link--main--container--text">Copy Show Link</div>
		</button>
	);
};
