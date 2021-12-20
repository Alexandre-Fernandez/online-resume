import {useState, useEffect, Children} from "react"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"
import useSkillFilter from "../../hooks/useSkillFilter"
import SkillTag from "../SkillTag"

interface ExperienceProps {
	title: string
	duration: string,
	qualification?: string,
	subtitle?: string,
	link?: string,
	tags?: Skills[],
	createList?: boolean
}

const Experience: React.FC<ExperienceProps> = ({
	children, title, subtitle, duration, qualification, link, tags = [], createList = true
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
	}, [children, tags]);

	const titleH3 = <h3 className="experience__title">{title}{qualification ? <span>{" - " + qualification}</span> : ""}</h3>
	const subtitleP = <p className="experience__subtitle">{subtitle}</p>
	const durationP = <p className="experience__duration">{duration}</p>

	const experienceHeader = <>{ subtitle 
		? <>{titleH3}<div className="experience__info">{subtitleP}{durationP}</div></>
		: <><div className="experience__info">{titleH3}{durationP}</div></>
	}</>
	return isActive && <article className="experience">
		{	link 
			? <a className="experience__link" href={link} target="_blank" rel="noreferrer">
				{experienceHeader}
			</a>
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