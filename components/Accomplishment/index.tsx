import SkillTag from "../SkillTag"
import {Children} from "react"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"
import useSkillFilter from "../../hooks/useSkillFilter"

interface AccomplishementProps {
	tags?: Skills[],
	isListItem?: boolean
}

const Accomplishement: React.FC<AccomplishementProps> = (
	{children, tags = [], isListItem = true}
) => {
	const isActive = useSkillFilter(SkillFilterContext, tags)

	const component = <>{
			Children.map(children, child => typeof child === "string" 
			? <p className="accomplishement__description">{child}</p> 
			: child
		)}
		<div className="accomplishement__tags">{
			tags && tags.map(tag => <SkillTag key={tag} name={tag}/>)
		}</div>
	</>
	return isActive && (isListItem 
		? <li className="accomplishement">{component}</li>
		: <article className="accomplishement">{component}</article>
	)
}

export default Accomplishement;