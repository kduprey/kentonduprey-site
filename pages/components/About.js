const About = ({ blurb }) => {
	if (!blurb) {
		blurb =
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, rerum. Est maiores deserunt voluptatem vitae, nostrum minima, doloribus sunt quisquam omnis rerum quod soluta blanditiis. Repudiandae delectus quas deleniti excepturi.";
	}
	return (
		<div
			className="container p-3 flex flex-col items-center justify-center"
			id="about"
		>
			<h1 className="text-5xl font-bold text-center py-3">About</h1>
			<div className="flex items-center justify-center">
				<div className="h-1/4 w-1/2 p-3 md:w-1/4">
					<img
						src="/me.png"
						alt="Kenton Duprey"
						className="rounded-md"
					/>
				</div>
				<p className="text-center leading-tight p-3 font-light md:w-1/2">
					{blurb}
				</p>
			</div>
		</div>
	);
};

export default About;
