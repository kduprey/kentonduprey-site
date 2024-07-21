import type { SkillType } from "@/sanity";

import { Skill } from "../Skill";

interface SkillsProps {
  headerText: string;
  skills: SkillType[];
}

export const Skills = ({ headerText, skills }: SkillsProps) => {
  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="pb-5 text-center font-bold">{headerText}</h2>
      <div className="flex w-full max-w-screen-lg flex-wrap items-center justify-evenly">
        {skills.map((skill) => {
          return (
            <Skill
              iconName={skill.iconSlug}
              key={skill.title}
              project={false}
              title={skill.title}
            />
          );
        })}
      </div>
    </section>
  );
};
