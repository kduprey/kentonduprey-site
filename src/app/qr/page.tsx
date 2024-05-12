import Image from "next/image";
import Link from "next/link";
import personalPhoto from "../../../public/me.png";
import { SvgIcon } from "@/components";

const page = () => {
	return (
		<main className="flex size-full flex-col items-center gap-10 p-6 font-display dark:bg-black dark:text-white">
			<div className="flex h-screen flex-col">
				<div className="mb-3 flex w-full flex-col items-center space-y-3 bg-black sm:mb-0">
					<div
						className="mb-0 mt-3 size-[95px] rounded-[50%]"
						style={{
							clipPath: "circle()",
							backgroundSize: "cover",
						}}
					>
						<Image
							alt="Bio Pic"
							src={personalPhoto}
							style={{
								maxWidth: "100%",
								height: "auto",
							}}
						/>
					</div>

					<h1 className="text-white">Kenton Duprey</h1>
					<h2 className="text-base text-gray-300">Software Engineer</h2>

					<div className="flex w-full items-center justify-evenly">
						<a href="tel:+15087350622">
							<button type="button">Call</button>
						</a>
						<a href="mailto:dev@kentonduprey.com">
							<button type="button">Email</button>
						</a>
					</div>
				</div>

				<div className="flex h-1/2 w-full flex-col items-center justify-evenly">
					<div className="flex w-full items-center p-3">
						<div className="text-gray-400">
							<SvgIcon iconName="phone" />
						</div>
						<div className="pl-6">
							<a href="tel:+15087350622">
								<p>508-735-0622</p>
							</a>
							<p className="text-gray-400">Mobile</p>
						</div>
					</div>
					<hr />
					<div className="flex w-full items-center p-3">
						<div className="text-gray-400">
							<SvgIcon iconName="email" />
						</div>
						<div className="pl-6">
							<a href="mailto:dev@kentonduprey.com">
								<p>dev@kentonduprey.com</p>
							</a>
							<p className="text-gray-400">Email</p>
						</div>
					</div>
					<hr />
					<div className="flex w-full items-center p-3">
						<div className="text-gray-400">
							<SvgIcon iconName="work" />
						</div>
						<div className="pl-6">
							<p>Kenton Duprey Web Development</p>
						</div>
					</div>
					<hr />
					<div className="flex w-full items-center p-3">
						<div className="text-gray-400">
							<SvgIcon iconName="website" />
						</div>
						<div className="pl-6">
							<Link href="/">kentonduprey.com</Link>
							<p className="text-gray-400">Website</p>
						</div>
					</div>
				</div>

				<a href="/contactcard.vcf">
					<button
						aria-label="Download Contact Card"
						className="fixed bottom-0 right-0 m-6 rounded-full  p-6 "
						name="ContactCard"
						type="button"
					>
						<SvgIcon iconName="addContact" />
					</button>
				</a>
			</div>
		</main>
	);
};

export default page;
