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
	JAVASCRIPT = "JavaScript",
	TYPESCRIPT = "TypeScript",
	NODEJS = "Node.js",
	NEXT = "Next.js",
	EJS = "EJS",
	WORDPRESS = "Wordpress",
	// FRONT END
	REACT = "React",
	REACT_NATIVE = "React Native",
	REDUX = "Redux",
	WEBPACK = "webpack",
	JQUERY = "jQuery",
	SASS = "SASS",
	CSS = "CSS",
	HTML = "HTML",
	// BACK END
	EXPRESS = "Express.js",
	MYSQL = "MySQL",
	MONGODB = "MongoDB",
	MONGOOSE = "Mongoose",
	DOCKER = "Docker",
	NGINX = "NGINX",
	// SOFTWARE
	PHOTOSHOP = "Adobe Photoshop",
	ILLUSTRATOR = "Adobe Illustrator",
	XD = "Adobe XD",
	VEGAS = "Vegas Pro",
	UNITY = "Unity",
	GODOT = "Godot Engine",
	BLENDER = "Blender",
	WORD = "Microsoft Word",
	EXCEL = "Microsoft Excel",
	POWERPOINT = "Microsoft PowerPoint",
	AUDACITY = "Audacity",
	// LANGUAGE
	ENGLISH = "English",
	SPANISH = "Spanish",
	FRENCH = "French",
	// MISC
	GIT = "Git",
	SEO = "SEO",
	RESPONSIVE = "Responsive Design",
	API_REST = "API REST",
	SECURITY = "Web Security",
	MVC = "MVC",
	BEM = "BEM",
	CS = "C#",
	CPP = "C++",
	GDSCRIPT = "GDScript",
	PATTERNS = "Programming Patterns",
	DATA_STRUCT = "Data Structures",
	OOP = "OOP",
	GAME_DEV = "Game Development",
	DB_DESIGN = "Database Design",
	UIUX = "UI/UX",
	APP_DESIGN = "App Design",
	TESTING = "Unit Testing", 
	DEPLOY = "Aplication Deployment"
}