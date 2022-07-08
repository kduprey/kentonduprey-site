import Image from "next/image";

const About = ({ blurb, imageUrl, imageHeight, imageWidth }) => {
	if (!blurb) {
		blurb =
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, rerum. Est maiores deserunt voluptatem vitae, nostrum minima, doloribus sunt quisquam omnis rerum quod soluta blanditiis. Repudiandae delectus quas deleniti excepturi.";
	}
	if (!imageUrl) {
		imageUrl = "/me.png";
	}
	return (
		<div
			className="container p-3 flex flex-col items-center justify-center"
			id="about"
		>
			<h2 className="font-bold text-center py-3">About</h2>
			<div className="flex flex-col md:flex-row items-center justify-center">
				<div className="h-1/6 w-1/2 sm:w-1/3 lg:w-1/4 p-3">
					<Image
						src={imageUrl}
						height={imageHeight}
						width={imageWidth}
						alt="Kenton Duprey"
						className="rounded-full dark:border dark:border-gray-300"
					/>
				</div>
				<p className="text-justify leading-tight p-3 font-light sm:w-4/5 md:w-2/5 lg:w-2/5">
					{blurb}
				</p>
			</div>
		</div>
	);
};

export default About;
