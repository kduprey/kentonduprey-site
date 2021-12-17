import Icon from "./Icon";

const Skill = ({ project, title, iconName, children }) => {
	if (!title) title = "Skill Title";

	if (project) {
		return <Icon iconName={iconName} />;
	}

	return (
		<div className="container p-3 flex flex-col items-center justify-center w-auto">
			<div className="pb-3 text-3xl">
				<Icon iconName={iconName} />
			</div>
			<h3 className=" text-center">{title}</h3>
		</div>
	);
};

export default Skill;
