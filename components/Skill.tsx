import { IconName } from "../types";
import Icon from "./Icon";

type Props = {
	project: boolean;
	title: string;
	iconName: IconName;
	children?: React.ReactNode;
};

const Skill = ({ project, title, iconName }: Props) => {
	if (!title) title = "Skill Title";

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

export default Skill;
