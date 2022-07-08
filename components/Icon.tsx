import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as SimpleIcons from "react-icons/si";
import * as GrommetIcons from "react-icons/gr";
import { IconName } from "../types";

type Props = {
	iconName: IconName;
	size?: number;
	color?: string;
};

const Icon = ({ iconName, size, color }: Props) => {
	if (!iconName || !iconName.icon) iconName.icon = "FaFontAwesomeFlag";

	const library = iconName.icon.substring(0, 2).toLowerCase();
	switch (library) {
		case "fa":
			const a = React.createElement(FontAwesome[iconName.icon]);
			return <div style={{ fontSize: size, color: color }}>{a}</div>;
			break;
		case "si":
			const b = React.createElement(SimpleIcons[iconName.icon]);
			return <div style={{ fontSize: size, color: color }}>{b}</div>;
			break;
		case "gr":
			const c = React.createElement(GrommetIcons[iconName.icon]);
			return <div style={{ fontSize: size, color: color }}>{c}</div>;
			break;
		default:
			const d = React.createElement(FontAwesome[iconName.icon]);
			return <div style={{ fontSize: size, color: color }}>{d}</div>;
			break;
	}
};

export default Icon;
