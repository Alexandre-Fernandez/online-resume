import {createContext, useState} from "react"
import {Skills} from "../types"
export {Skills} from "../types" // forwarding Skills

export type SkillFilterContextType = [Set<string>, React.Dispatch<React.SetStateAction<Set<string>>>]

export const SkillFilterContext : React.Context<SkillFilterContextType> = createContext(
	[new Set(), () => console.error("SkillFilterContextProvider unmounted")]
)

interface SkillFilterContextProviderProps {
	children: React.ReactNode
	skillFilter: Set<string>,
	setSkillFilter: React.Dispatch<React.SetStateAction<Set<string>>>
}

export const SkillFilterContextProvider : React.FC<SkillFilterContextProviderProps> = ({
	children, skillFilter, setSkillFilter
}) => (
	<SkillFilterContext.Provider value={[skillFilter, setSkillFilter]}>
		{children}
	</SkillFilterContext.Provider>
)

/*

	const immutable = {
		add: (skill: Skills) => setSkills(new Set([...skills, skill])),
		clear: () => setSkills(new Set<string>()),
		delete: (skill: Skills) => {
			const temp = new Set(skills)
			temp.delete(skill)
			setSkills(temp)
		},
	}

*/