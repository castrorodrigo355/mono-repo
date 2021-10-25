import React, { useEffect, useState } from "react";
import { GoBack } from "../../common/GoBack/GoBack";
import { Spinner } from "../../components/Spinner/Spinner";
import { Episode } from "../../components/Episode/Episode";
import { Previous } from "../../common/Previous/Previous";
import { ShareLink } from "../../components/ShareLink/ShareLink";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { GenericTitle } from "../../components/GenericTitle/GenericTitle";
import "./ShowDetail.css";
import { Navbar } from "../../components/Navbar/Navbar";

export const ShowDetail = ({ match }) => {
	const history = useHistory();
	const { browserType } = useSelector((state) => state.ui);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(null);

	const getShowDetail = async () => {
		setLoading(true);
		const id = match.params.id;
		await fetch(`http://localhost:5000/api/integrations/company/shows/${id}`)
			.then((response) => response.json())
			.then((response) => {
				console.log("DETAIL : ", response);
				setShow(response);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	};

	useEffect(() => {
		getShowDetail();
	}, []);

	if (loading) {
		return (
			<div className="show--detail--main--container">
				<Spinner />
			</div>
		);
	} else if (!loading && error) {
		return <div>Error</div>;
	} else {
		return (
			<div className="show--detail--main--container">
				{/* <Navbar /> */}
				{show && (
					<>
						{browserType && browserType === "mobile" && (
							<GoBack onClick={() => history.goBack()} />
						)}
						<div className="show--detail--main--container--image">
							{browserType === "web" && (
								<div className="show--detail--main--container--image--previuos">
									<Previous onClick={() => history.goBack()} />
								</div>
							)}
							<img src={show.image_url} alt="..." />
						</div>
						<div className="show--detail--main--container--data">
							<div className="show--detail--main--container--data--title">
								{show.title}
							</div>
							<div className="show--detail--main--container--data--description">
								{show.description}
							</div>
							<div className="show--detail--main--container--data--share">
								<ShareLink />
							</div>
							<GenericTitle title="Playlist" />
							<div className="show--detail--main--container--episodes">
								{show.episodes.map((episode, i) => (
									<Episode
										key={i}
										episode={episode}
										image={show.image_url}
										index={i}
										creator={show.creator_name}
									/>
								))}
							</div>
						</div>
					</>
				)}
			</div>
		);
	}
};
