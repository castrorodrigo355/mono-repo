import React, { useEffect } from "react";
import actCampaignEmail from "../../assets/images/login/actCampaignEmail.png";
import { User } from "../../components/User/User";
import { Spinner } from "../../components/Spinner/Spinner";
import { UserIcon } from "../../components/UserIcon/UserIcon";
import { useHistory } from "react-router-dom";
import { ShowElement } from "../../components/ShowElement/ShowElement";
import { GenericTitle } from "../../components/GenericTitle/GenericTitle";
import { CreatorElement } from "../../components/CreatorElement/CreatorElement";
import { openUser, getShows } from "../../redux/ui/actions";
import { useSelector, useDispatch } from "react-redux";
import "./Dashboard.css";

export const Dashboard = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const ui = useSelector((state) => state.ui);
	const { userOpen, browserType, loadingShows, shows } = ui;
	const clickShow = async ({ id }) => history.push(`/show/${id}`);

	useEffect(() => {
		dispatch(getShows());
	}, []);

	if (loadingShows) {
		return (
			<div className="dashboard--main--container">
				<Spinner />
			</div>
		);
	}

	return (
		<>
			{browserType && (
				<div className="dashboard--main--container">
					{browserType === "mobile" && (
						<div className="dashboard--main--container--user--icon">
							<UserIcon onClick={() => dispatch(openUser())} />
						</div>
					)}
					{browserType === "mobile" && <CompanyLogo />}

					<div className="dashboard--main--container--distribution">
						<div className="dashboard--main--container--distribution--creators">
							<GenericTitle
								title="Podcasts available from"
								browserType={browserType}
							/>
							<div className="dashboard--main--container--creators">
								{shows &&
									shows.creators.map((creator) => {
										return (
											<CreatorElement
												key={creator.id}
												creator={creator}
												onClick={() => console.log(creator)}
												browserType={browserType}
											/>
										);
									})}
							</div>
						</div>

						<div className="dashboard--main--container--distribution--shows">
							<div className="dashboard--main--container--name">{`Hi ${"Rodrigo"}`}</div>
							<GenericTitle
								title="You're invited to listen"
								browserType={browserType}
							/>
							<div className="dashboard--main--container--shows">
								{shows &&
									shows.shows.map((show) => (
										<ShowElement
											key={show.id}
											show={show}
											onClick={() => clickShow(show)}
										/>
									))}
							</div>
						</div>
					</div>

					{browserType === "mobile" && (
						<div
							className={`dashboard--main--container--user ${
								userOpen ? "user--open" : ""
							}`}
						>
							<User />
						</div>
					)}
				</div>
			)}
		</>
	);
};

const CompanyLogo = () => (
	<div className="dashboard--main--container--company">
		<img
			className="dashboard--main--container--company--image"
			src={actCampaignEmail}
			alt="..."
		/>
	</div>
);
