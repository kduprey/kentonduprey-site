const Skill = ({ title, children }) => {
	if (!title) title = "Skill Title";

	return (
		<div className="container p-3 flex flex-col items-center justify-center w-auto">
			<div className="pb-3 text-5xl">{children}</div>
			<h1 className="text-2xl font-semibold text-center">{title}</h1>
		</div>
	);
};

export default Skill;
