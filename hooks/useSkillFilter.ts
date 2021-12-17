import {useState, useEffect, useContext} from "react"
import {Skills, SkillFilterContextType} from "../context/SkillFilterContext"

const useSkillFilter = (
	skillFilterContext : React.Context<SkillFilterContextType>, tags : Skills[]
) => {
	const [skillFilter, setSkillFilter] = useContext(skillFilterContext)
	const [isActive, setIsActive] = useState(true)

	useEffect(() => {
		if(skillFilter.size === 0) return setIsActive(true)
		if(tags.some(tag => skillFilter.has(tag))) return setIsActive(true)
		setIsActive(false)
	}, [skillFilter, tags]);

	return isActive
}

export default useSkillFilter