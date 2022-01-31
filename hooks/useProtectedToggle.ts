import {useState, useEffect, useContext} from "react"
import {IdentityContext, Identity} from "../context/IdentityContext"

enum ProtectedToggleState {
	OFF,
	WAITING,
	ON
}

const useProtectedToggle = () : [boolean, () => void, () => void]=> {
	const [identity] = useContext(IdentityContext)
	const [state, setState] = useState(ProtectedToggleState.OFF)

	const turnOn = () => { // turns on or off depending on captcha outcome, see useEffect
		if(identity === Identity.HUMAN) return setState(ProtectedToggleState.ON)
		setState(ProtectedToggleState.WAITING) 
	}

	const turnOff = () => {
		if(state === ProtectedToggleState.WAITING) return
		setState(ProtectedToggleState.OFF)
	}

	useEffect(() => {
		if(state !== ProtectedToggleState.WAITING) return
		if(identity === Identity.ROBOT) return setState(ProtectedToggleState.OFF)
		if(identity === Identity.HUMAN) return setState(ProtectedToggleState.ON)
	}, [identity])

	return [state === ProtectedToggleState.ON ? true : false, turnOn, turnOff]
}

export default useProtectedToggle