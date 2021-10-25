import "./CreatorElement.css";

export const CreatorElement = ({ creator, onClick }) => {
	return (
		<div className="creator--element--main--container" onClick={onClick}>
			{creator.name}
		</div>
	);
};
