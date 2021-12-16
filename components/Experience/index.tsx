import styles from "./Experience.module.scss"
import {useState, useEffect, useContext, Children, Fragment} from "react"
import SkillTag from "../SkillTag"
import Accomplishment from "../Accomplishment"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"


interface ExperienceProps {
	title: string
	subtitle: string,
	duration: string,
	link?: string,
	createList?: boolean
}
 
const Experience: React.FC<ExperienceProps> = ({children, title, subtitle, duration, link, createList = true}) => {
	const [skillFilter] = useContext(SkillFilterContext)
	const [childrenTags, setChildrenTags] = useState<Skills[]>([])

	useEffect(() => {
		const temp = new Set<Skills>()
		Children.forEach(children, (child: React.ReactElement<any>) => {
			if(child.props.tags) child.props.tags.forEach((tag: Skills) => temp.add(tag))
		})
		setChildrenTags([...temp])
	}, []);

	useEffect(() => {
		if(skillFilter.size === 0) return
		if(childrenTags.some(childTag => skillFilter.has(childTag))) return
		// hide experience
		console.log("HIDE", title)
	}, [childrenTags, skillFilter]);


	return <article className={styles.experience}>
		{	link 
			? <a href={link}>
				<h3>{title}</h3>
				<div className={styles.subtitle_container}>
					<span>{subtitle}</span><span>{duration}</span>
				</div>
			</a>
			: <>
				<h3>{title}</h3>
				<div className={styles.subtitle_container}>
					<span>{subtitle}</span><span>{duration}</span>
				</div>
			</>
		}{	// <Experience> creates the <ul> and <Accomplishment> creates its <li>
			createList 
			? <ul>{
				children
			}</ul>
			: children
		}
	</article>
}
 
export default Experience;