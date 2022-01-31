import {createContext, useState} from "react"
import {Identity} from "../types"
export {Identity} from "../types" // forwarding Identity

type IdentityContextType = [Identity, React.Dispatch<React.SetStateAction<Identity>>]

export const IdentityContext : React.Context<IdentityContextType> = createContext(
	[Identity.ROBOT, () => console.error("IdentityContextProvider unmounted")]
)

interface IdentityContextProviderProps {
	children: React.ReactNode,
	identity: Identity,
	setIdentity: React.Dispatch<React.SetStateAction<Identity>>
}

export const IdentityContextProvider : React.FC<IdentityContextProviderProps> = ({children, identity, setIdentity}) => (
	<IdentityContext.Provider value={[identity, setIdentity]}>
		{children}
	</IdentityContext.Provider>
)