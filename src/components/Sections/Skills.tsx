import { SkillIcon } from "@/types";
import { Skill } from "../Skill";

type Props = {
	skillData: SkillIcon[];
};

export const Skills = ({ skillData }: Props) => {
	return (
		<section className="flex w-full flex-col items-center">
			<h2 className="pb-5 text-center font-bold">Skills</h2>
			<div className="flex w-full max-w-screen-lg flex-wrap items-center justify-evenly">
				{skillData.map((e, index) => {
					return (
						<Skill
							key={index}
							project={false}
							title={e.title}
							iconName={e.iconName}
						/>
					);
				})}
			</div>
		</section>
	);
};
