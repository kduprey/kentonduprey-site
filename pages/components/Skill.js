import Icon from "./Icon";

const Skill = ({ project, title, iconName, children }) => {
	if (!title) title = "Skill Title";

	if (project) {
		return <Icon iconName={iconName} />;
	}

	return (
		<div className="container p-3 flex flex-col items-center justify-center w-auto">
			<div className="pb-3 text-5xl">
				<Icon iconName={iconName} />
			</div>
			<h1 className="text-2xl font-semibold text-center">{title}</h1>
		</div>
	);
};

export default Skill;
