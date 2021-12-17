import {Skills} from "../../types"
import SkillTag from "../SkillTag"

interface SkillCategoryProps {
	name: string,
	tags: Skills[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({name, tags}) => {
	return <div className="skill-category">
		<h3>{name}</h3>
		<div>{
			tags.map(tag => <SkillTag key={tag} name={tag}/>)	
		}</div>
	</div>
}

export default SkillCategory;