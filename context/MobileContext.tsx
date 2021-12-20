import {createContext} from "react"
import useMedia from "../hooks/useMedia"

export const MobileContext = createContext(false)

interface MobileContextProviderProps {
	children: React.ReactNode,
}

export const MobileContextProvider : React.FC<MobileContextProviderProps> = ({children}) => {
	const isMobile = useMedia("(max-width: 800px)")
	return <MobileContext.Provider value={isMobile}>
		{children}
	</MobileContext.Provider>
}