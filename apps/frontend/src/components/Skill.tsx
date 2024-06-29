import { Icon } from "./Icon";

interface SkillProps {
  project: boolean;
  title: string;
  iconName: string;
}

export const Skill = ({ project, title, iconName }: SkillProps) => {
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
