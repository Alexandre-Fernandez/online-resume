import styles from "./Experience.module.scss"
import {useState, useEffect, Children} from "react"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"
import useSkillFilter from "../../hooks/useSkillFilter"
import SkillTag from "../SkillTag"

interface ExperienceProps {
	title: string
	subtitle: string,
	duration: string,
	link?: string,
	tags?: Skills[],
	createList?: boolean
}

const Experience: React.FC<ExperienceProps> = ({
	children, title, subtitle, duration, link, tags, createList = true
}) => {
	const [skillTags, setSkillTags] = useState<Skills[]>([])
	const isActive = useSkillFilter(SkillFilterContext, skillTags)

	useEffect(() => {
		if(tags) return setSkillTags(tags)
		const temp = new Set<Skills>()
		Children.forEach(children, (child: React.ReactElement<any>) => {
			if(child.props.tags) child.props.tags.forEach((tag: Skills) => temp.add(tag))
		})
		setSkillTags([...temp])
	}, []);

	return isActive && <article className={styles.experience}>
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
		}{ tags && <div>{
				tags && tags.map(tag => <SkillTag key={tag} name={tag}/>)
			}</div>
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