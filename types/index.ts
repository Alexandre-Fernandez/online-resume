import {getRandomIntBetween} from "../lib/helpers"

export class Challenge {
	constructor(
		public a?: number,
		public b?: number
	) {
		if(this.a && this.b) return
		this.a = getRandomIntBetween(0, 9)
		this.b = getRandomIntBetween(0, 9)
	}

	get solution() {
		return this.a + this.b
	}
}


export enum Identity {
	ROBOT,
	TESTING,
	HUMAN
}

export enum Skills {
	// FULL STACK
	NEXT = "Next.js",
	NODEJS = "Node.js",
	EJS = "EJS",
	// FRONT END
	REACT = "React",
	REACT_NATIVE = "React Native",
	REDUX = "Redux",
	WEBPACK = "webpack",
	// BACK END
	EXPRESS = "Express.js",
	MYSQL = "MySQL",
	MONGODB = "MongoDB",
	MONGOOSE = "Mongoose",
	// SOFTWARE
	PHOTOSHOP = "Adobe Photoshop",
	ILLUSTRATOR = "Adobe Illustrator",
	VEGAS = "Vegas Pro",
	UNITY = "Unity",
	GODOT = "Godot Engine",
	BLENDER = "Blender",
	WORD = "Microsoft Word",
	EXCEL = "Microsoft Excel",
	POWERPOINT = "Microsoft PowerPoint",
	// LANGUAGE
	JAVASCRIPT = "JavaScript",
	TYPESCRIPT = "TypeScript",
	JQUERY = "jQuery",
	CS = "C#",
	CPP = "C++",
	SASS = "SASS",
	CSS = "CSS",
	HTML = "HTML",
	ENGLISH = "English",
	SPANISH = "Spanish",
	FRENCH = "French",
	// MISC
	GIT = "Git",
	SEO = "SEO",
	RESPONSIVE_DESIGN = "Responsive Design",
	API_REST = "API REST",
	OAUTH2 = "OAuth 2.0",
	MVC = "MVC",
	BEM = "BEM",
}