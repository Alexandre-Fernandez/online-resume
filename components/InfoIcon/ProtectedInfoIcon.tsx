import {useRef} from "react"
import withCaptcha from "../../hoc/withCaptcha"
import useProtectedToggle from "../../hooks/useProtectedToggle"
import useClickOutside from "../../hooks/useClickOutside"
import InfoBox from "../InfoBox"

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
		<InfoBox>{children}</InfoBox>
	}</div>
}

export default withCaptcha(ProtectedInfoIconProps);