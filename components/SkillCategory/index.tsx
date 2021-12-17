import {Skills} from "../../types"
import SkillTag from "../SkillTag"

interface SkillCategoryProps {
	name: string,
	tags: Skills[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({name, tags}) => {
	return <div className="skill-category">
		<h3 className="skill-category__title">{name}</h3>
		<div className="skill-category__tags">{
			tags.map(tag => <SkillTag key={tag} name={tag}/>)	
		}</div>
	</div>
}

export default SkillCategory;