import React, { useEffect, useState, useRef } from "react";
import back10 from "../../assets/images/reproducer/back10.png";
import play from "../../assets/images/reproducer/play.png";
import pause from "../../assets/images/reproducer/pause.png";
import normal10 from "../../assets/images/reproducer/1X.png";
import forward10 from "../../assets/images/reproducer/forward10.png";
import { GoBack } from "../../common/GoBack/GoBack";
import { useHistory } from "react-router-dom";
import { SpeedOption } from "../../components/SpeedOption/SpeedOption";
import { generateData } from "./helpers";
import { ControlButton } from "../../components/ControlButton/ControlButton";
import { HighSpeedOptions } from "../../components/HighSpeedOptions/HighSpeedOptions";
import { StaticDataPodcast } from "../../components/StaticDataPodcast/StaticDataPodcast";
import "./EpisodeReproduce.css";

export const EpisodeReproduce = ({ match }) => {
	const history = useHistory();

	const audioPlayer = useRef();
	const progressBar = useRef();
	const animationRef = useRef();

	const [openSpeedOptions, setOpenSpeedOptions] = useState(false);
	const [selectedIcon, setSelectedIcon] = useState(normal10);

	const [playing, setPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const [episode, setEpisode] = useState(null);

	const calculateTime = (secs) => {
		const minutes = Math.floor(secs / 60);
		const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
		const seconds = Math.floor(secs % 60);
		const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
		return `${returnedMinutes}:${returnedSeconds}`;
	};

	const playStopFunction = () => {
		const prevValue = playing;
		setPlaying(!prevValue);
		if (!prevValue) {
			audioPlayer.current.play();
			animationRef.current = requestAnimationFrame(whilePlaying);
		} else {
			audioPlayer.current.pause();
		}
	};

	const whilePlaying = () => {
		progressBar.current.value = audioPlayer.current.currentTime;
		changePlayerCurrentTime();
		animationRef.current = requestAnimationFrame(whilePlaying);
	};

	const changeRange = () => {
		audioPlayer.current.currentTime = progressBar.current.value;
		changePlayerCurrentTime();
	};

	const changePlayerCurrentTime = () => {
		progressBar.current.style.setProperty(
			"--seek-before-width",
			`${(progressBar.current.value / duration) * 100}%`,
		);
		setCurrentTime(progressBar.current.value);
	};

	const selectIcon = (icon, text) => {
		setSelectedIcon(icon);
		setOpenSpeedOptions((x) => !x);
	};
	// useEffect(() => {
	// 	const seconds = Math.floor(audioPlayer.current.duration);
	// 	setDuration(seconds);
	// 	progressBar.current.max = seconds;
	// }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

	useEffect(() => {
		try {
			setEpisode(generateData(match));
		} catch (error) {
			history.goBack();
		}
	}, []);

	return (
		<div className="episode--reproduce--container">
			{episode && (
				<>
					<GoBack onClick={() => history.goBack()} />
					<div className="episode--reproduce--container--blur">
						<img
							className="episode--reproduce--container--blur--image"
							src={episode.image}
							alt="..."
						/>
					</div>
					<div className="episode--reproduce--container--view">
						<StaticDataPodcast episode={episode} />
						<div className="episode--reproduce--container--view--audio">
							<audio ref={audioPlayer} src={episode.url} preload="metadata" />
							<input
								className="episode--reproduce--container--view--audio--progress"
								type="range"
								defaultValue="0"
								ref={progressBar}
								onChange={changeRange}
							/>
						</div>
					</div>
					<div className="episode--reproduce--container--controls">
						<ControlButton icon={back10} onClick={() => {}} />
						<ControlButton
							icon={playing ? pause : play}
							onClick={playStopFunction}
						/>
						<div className="episode--reproduce--container--controls--relative">
							<ControlButton icon={forward10} onClick={() => {}} />
							<div
								className={`episode--reproduce--container--controls--absolute ${
									openSpeedOptions ? "open--spedd--options" : ""
								}`}
							>
								{openSpeedOptions ? (
									<HighSpeedOptions selectIcon={selectIcon} />
								) : (
									<SpeedOption
										icon={selectedIcon}
										onClick={() => setOpenSpeedOptions((x) => !x)}
									/>
								)}
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
