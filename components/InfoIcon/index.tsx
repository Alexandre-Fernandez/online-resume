import styles from "./InfoIcon.module.scss"
import {useContext, useRef, useEffect, useState} from "react"
import {IdentityContext, Identity} from "../../context/IdentityContext"
import PopUpBackround from "../PopUpBackround"
import IdentityPopup from "../IdentityPopup"

import useClickOutside from "../../hooks/useClickOutside"

enum InfoIconState {
	CLOSED,
	WAITING,
	OPENED
}

interface InfoIconProps {
	src: string,
	alt: string
	className?: string,
	isProtected?: boolean
}

const InfoIcon : React.FC<InfoIconProps> = ({
	src, alt, children, className = "", isProtected = true
}) => {
	const [identity, setIdentity] = useContext(IdentityContext)
	const [state, setState] = useState(InfoIconState.CLOSED)
	const iconRef = useRef()
	const infoBoxRef = useRef()

	useEffect(() => {
		if(!isProtected || state !== InfoIconState.WAITING) return
		if(identity === Identity.HUMAN) return setState(InfoIconState.OPENED)
	}, [identity]);

	const handleIconClick = () => {
		if(isProtected && identity === Identity.ROBOT) {
			setIdentity(Identity.TESTING)
			return setState(InfoIconState.WAITING)
		}
		setState(InfoIconState.OPENED)
	}

	const handleCloseInfoBox = () => {
		if(identity === Identity.TESTING) return // used by useClickOutside(iconRef)
		setState(InfoIconState.CLOSED)
	}

	useClickOutside(infoBoxRef, handleCloseInfoBox)
	useClickOutside(iconRef, () => ( // prevents stacking open states before IdentityPopup
		!isProtected || identity !== Identity.HUMAN
	) && handleCloseInfoBox)

	return <>
		<div className={styles.info_icon}>
			<img 
			src={src} 
			alt={alt} 
			className={className}
			onClick={handleIconClick}
			ref={iconRef}
			/>{
			state === InfoIconState.OPENED && <div className={styles.info_box} ref={infoBoxRef}>{
				(!isProtected || identity === Identity.HUMAN) && children
			}</div>
		}</div>
		{
			identity === Identity.TESTING && 
			<PopUpBackround onClick={() => setIdentity(Identity.ROBOT)}>
				<IdentityPopup />
			</PopUpBackround>
		}
	</>
}

export default InfoIcon;