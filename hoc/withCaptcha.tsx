import {useContext} from "react"
import {IdentityContext, Identity} from "../context/IdentityContext"
import PopUpBackground from "../components/PopUpBackground"
import IdentityPopup from "../components/IdentityPopup"

const withCaptcha = <P extends object>(
	Component : React.ComponentType<P>
) => (props : P)  => {
	const [identity, setIdentity] = useContext(IdentityContext)

	const startCaptcha = () => identity !== Identity.HUMAN && setIdentity(Identity.TESTING)

	return <>
		<Component 
			startCaptcha={startCaptcha}
			{...props} 
		/>{	
		identity === Identity.TESTING &&
		<PopUpBackground onClick={() => setIdentity(Identity.ROBOT)}> 
			<IdentityPopup />
		</PopUpBackground>
	}</>
}

export default withCaptcha