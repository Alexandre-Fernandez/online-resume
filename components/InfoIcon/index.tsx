import styles from "./InfoIcon.module.scss"
import {useContext, useRef, useEffect, useState} from "react"
import {IdentityContext, Identity} from "../../context/IdentityContext"
import PopUpBackground from "../PopUpBackground"
import IdentityPopup from "../IdentityPopup"
import useClickOutside from "../../hooks/useClickOutside"

enum InfoIconState {
	CLOSED,
	WAITING,
	OPENED
}


interface InfoIconProps {
	src: string,
	alt: string,
	className?: string,
	isProtected?: boolean
}

const InfoIcon : React.FC<InfoIconProps> = ({
	src, alt, children, className = "", isProtected = true
}) => {
	const [identity, setIdentity] = useContext(IdentityContext)
	const [state, setState] = useState(InfoIconState.CLOSED)
	const ref = useRef()

	const handleIconClick = () => {
		if(!isProtected || identity === Identity.HUMAN) return setState(InfoIconState.OPENED)
		if(identity === Identity.ROBOT) {
			setState(InfoIconState.WAITING)
			setIdentity(Identity.TESTING)
		}
	}

	const handleClickOutsideRef = () => {
		if(identity === Identity.TESTING) return
		setState(InfoIconState.CLOSED)
	}

	useEffect(() => {
		if(identity !== Identity.HUMAN) return
		if(state === InfoIconState.WAITING) setState(InfoIconState.OPENED)
	}, [identity])

	useClickOutside(ref, handleClickOutsideRef)

	return <>
		<div className={styles.info_icon} ref={ref}>
			<img 
			src={src} 
			alt={alt} 
			className={className}
			onClick={handleIconClick}
			/>{
			state === InfoIconState.OPENED && <div className={styles.info_box}>{
				(!isProtected || identity === Identity.HUMAN) && children
			}</div>
		}</div>
		{	// we could also move this to index and share it with context
			identity === Identity.TESTING &&
			<PopUpBackground onClick={() => setIdentity(Identity.ROBOT)}> 
				<IdentityPopup />
			</PopUpBackground>
		}
	</>
}

export default InfoIcon;