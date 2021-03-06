import {useContext, useEffect, useState} from "react"
import {SkillFilterContext, Skills} from "../../context/SkillFilterContext"
import {MobileContext} from "../../context/MobileContext"

interface SkillTagProps {
	name: Skills
}

const SkillTag: React.FC<SkillTagProps> = ({name}) => {
	const isMobile = useContext(MobileContext)
	const [skillFilter, setSkillFilter] = useContext(SkillFilterContext)
	const [isToggled, setIsToggled] = useState(false)

	useEffect(() => {
		if(skillFilter.has(name)) return setIsToggled(true)
		setIsToggled(false)
	}, [skillFilter, name]);

	const handleClick = () => {
		if(skillFilter.has(name)) {
			const temp = new Set(skillFilter)
			temp.delete(name)
			return setSkillFilter(new Set(temp))
		}
		setSkillFilter(new Set([...skillFilter, name]))
	}

	return <button 
		className={`skill-tag${isToggled ? " skill-tag--active" : ""}${!isMobile ? " desktop" : ""}`}
		onClick={handleClick}
	>
		{name}
	</button>
}
 
export default SkillTag;