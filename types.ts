export interface Bio {
	biographyBlurb: BiographyBlurb;
	bioPic: BioPic;
}

export interface BioPic {
	url: string;
	width: number;
	height: number;
}

export interface BiographyBlurb {
	text: string;
}

export interface Project {
	title: string;
	description: string;
	link: string;
	projectImage: BioPic;
	projectSkills: SkillIcon[];
}

export interface IconName {
	icon: string;
}

export interface SkillIcon {
	title: string;
	iconName: IconName;
}
