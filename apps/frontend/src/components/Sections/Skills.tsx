import { H2 } from "@kduprey/ui";
import type { SkillType } from "@/sanity/data/queries/pageQueries/home.queries";

import { Skill } from "../Skill";

interface SkillsProps {
  headerText: string;
  skills: SkillType[];
}

export const Skills = ({ headerText, skills }: SkillsProps) => (
  <section className="flex w-full flex-col items-center">
    <H2 className="pb-5 text-center">{headerText}</H2>
    <div className="flex w-full max-w-screen-lg flex-wrap items-center justify-evenly">
      {skills.map((skill) => (
        <Skill
          iconName={skill.iconSlug}
          key={skill.title}
          project={false}
          title={skill.title}
        />
      ))}
    </div>
  </section>
);
