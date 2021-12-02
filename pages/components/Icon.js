import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as SimpleIcons from "react-icons/si";
import * as GrommetIcons from "react-icons/gr";

const Icon = ({ iconName, size, color }) => {
	if (!iconName) iconName = "FaFontAwesomeFlag";

	const library = iconName.substring(0, 2).toLowerCase();
	switch (library) {
		case "fa":
			const a = React.createElement(FontAwesome[iconName]);
			return <div style={{ fontSize: size, color: color }}>{a}</div>;
			break;
		case "si":
			const b = React.createElement(SimpleIcons[iconName]);
			return <div style={{ fontSize: size, color: color }}>{b}</div>;
			break;
		case "gr":
			const c = React.createElement(GrommetIcons[iconName]);
			return <div style={{ fontSize: size, color: color }}>{c}</div>;
			break;
		default:
			const d = React.createElement(FontAwesome[iconName]);
			return <div style={{ fontSize: size, color: color }}>{d}</div>;
			break;
	}
};

export default Icon;
