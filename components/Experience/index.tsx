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

	const experienceHeader = <>
		<h3 className="experience__title">{title}</h3>
		<div className="experience__info">
			<p className="experience__subtitle">{subtitle}</p>
			<p className="experience__duration">{duration}</p>
		</div>
	</>
	return isActive && <article className="experience">
		{	link 
			? <a className="experience__link" href={link}>{experienceHeader}</a>
			: <>{experienceHeader}</>
		}{ tags && <div className="experience__tags">{
				tags && tags.map(tag => <SkillTag key={tag} name={tag}/>)
			}</div>
		}{	// <Experience> creates the <ul> and <Accomplishment> creates its <li>, this is done so <Accomplishment> can hide while keeping both of these components independant
			createList 
			? <ul className="experience__list list">{
				children
			}</ul>
			: children
		}
	</article>
}
 
export default Experience;