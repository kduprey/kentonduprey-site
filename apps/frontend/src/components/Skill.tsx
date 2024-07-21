import { Icon } from "./Icon";

interface SkillProps {
  iconName: string;
  project: boolean;
  title: string;
}

export const Skill = ({ iconName, project, title }: SkillProps) => {
  if (project) {
    return <Icon iconName={iconName} />;
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="pb-3 text-3xl">
        <Icon iconName={iconName} />
      </div>
      <h3 className="text-center">{title}</h3>
    </div>
  );
};
