import styles from "./Accomplishement.module.scss"
import {Skills} from "../../types"
import SkillTag from "../SkillTag"
import {useState, useEffect, useContext, Children, Fragment} from "react"


interface AccomplishementProps {
	tags?: Skills[],
	isListItem?: boolean
}
const Accomplishement: React.FC<AccomplishementProps> = ({children, tags, isListItem = true}) => {
	
	const component = <>{
			Children.map(children, child => typeof child === "string" 
			? <p>{child}</p> 
			: child
		)}
		<div>{
			tags && tags.map(tag => <SkillTag key={tag} name={tag}/>)
		}</div>
	</>
	return isListItem 
	? <li>{component}</li>
	: <div>{component}</div>
}
 
export default Accomplishement;