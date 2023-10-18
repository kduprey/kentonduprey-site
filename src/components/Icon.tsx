import { createElement } from "react";
import * as FontAwesome from "react-icons/fa";
import * as GrommetIcons from "react-icons/gr";
import * as SimpleIcons from "react-icons/si";
import type { IconName } from "@/types";

interface IconProps {
	iconName: IconName;
	size?: number;
	color?: string;
}

export const Icon = ({ iconName, size, color }: IconProps) => {
	const library = iconName.icon.substring(0, 2).toLowerCase();
	switch (library) {
		case "fa":
			// const a = React.createElement(FontAwesome[iconName.icon]);

			return (
				<div style={{ fontSize: size, color }}>
					{createElement(
						FontAwesome[iconName.icon as keyof typeof FontAwesome]
					)}
				</div>
			);

			break;
		case "si":
			return (
				<div style={{ fontSize: size, color }}>
					{createElement(
						SimpleIcons[iconName.icon as keyof typeof SimpleIcons]
					)}
				</div>
			);
			break;
		case "gr":
			return (
				<div style={{ fontSize: size, color }}>
					{createElement(
						GrommetIcons[iconName.icon as keyof typeof GrommetIcons]
					)}
				</div>
			);
			break;
		default:
			return (
				<div style={{ fontSize: size, color }}>
					{createElement(
						FontAwesome[iconName.icon as keyof typeof FontAwesome]
					)}
				</div>
			);
			break;
	}
};
