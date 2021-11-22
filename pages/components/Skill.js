const Skill = ({ title, blurb, children }) => {
	if (!title) title = "Skill Title";
	if (!blurb)
		blurb =
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, nulla nobis quas dolorum nesciunt adipisci corporis error libero voluptatem ipsa, est deserunt molestias eveniet rerum reprehenderit provident repudiandae quod hic!";

	return (
		<div className="container p-3 flex flex-col items-center justify-center">
			<div className="pb-3 text-5xl">{children}</div>
			<h1 className="text-2xl font-semibold text-center">{title}</h1>
			<p className="text-base font-light leading-tight text-center">
				{blurb}
			</p>
		</div>
	);
};

export default Skill;
