import { Skill } from "../Skill";
import type { SkillIcon } from "@/types";

interface SkillsProps {
	skillData: SkillIcon[];
}

export const Skills = ({ skillData }: SkillsProps) => {
	return (
		<section className="flex w-full flex-col items-center">
			<h2 className="pb-5 text-center font-bold">Skills</h2>
			<div className="flex w-full max-w-screen-lg flex-wrap items-center justify-evenly">
				{skillData.map((e) => {
					return (
						<Skill
							iconName={e.iconName}
							key={e.title}
							project={false}
							title={e.title}
						/>
					);
				})}
			</div>
		</section>
	);
};
