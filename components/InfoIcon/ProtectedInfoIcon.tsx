import {useRef, useEffect, useState} from "react"
import withCaptcha from "../../hoc/withCaptcha"
import useProtectedToggle from "../../hooks/useProtectedToggle"
import useClickOutside from "../../hooks/useClickOutside"

interface ProtectedInfoIconProps {
	children: any,
	src: string,
	alt: string,
	startCaptcha?: () => {}
}

const ProtectedInfoIconProps : React.FC<ProtectedInfoIconProps> = ({
	src, alt, children, startCaptcha
}) => {
	const [isOpen, toggleOn, toggleOff] = useProtectedToggle()
	const ref = useRef()

	const handleIconClick = () => {
		toggleOn()
		startCaptcha()
	}

	useClickOutside(ref, toggleOff)

	return <div className="info_icon" ref={ref}>
		<img 
		src={src} 
		alt={alt} 
		className="info_icon__icon"
		onClick={handleIconClick}
		/>{ isOpen && 
		<div className="info_icon__info-box">{children}</div>
	}</div>
}

export default withCaptcha(ProtectedInfoIconProps);