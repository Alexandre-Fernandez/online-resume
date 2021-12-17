import SkillTag from "../SkillTag"
import {Children} from "react"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"
import useSkillFilter from "../../hooks/useSkillFilter"

interface AccomplishementProps {
	tags?: Skills[],
	isListItem?: boolean
}

const Accomplishement: React.FC<AccomplishementProps> = ({children, tags, isListItem = true}) => {
	const isActive = useSkillFilter(SkillFilterContext, tags)

	const component = <>{
			Children.map(children, child => typeof child === "string" 
			? <p>{child}</p> 
			: child
		)}
		<div>{
			tags && tags.map(tag => <SkillTag key={tag} name={tag}/>)
		}</div>
	</>
	return isActive && (isListItem 
		? <li>{component}</li>
		: <div>{component}</div>
	)
}

export default Accomplishement;