import {useRef, useState} from "react"
import useClickOutside from "../../hooks/useClickOutside"
import InfoBox from "../InfoBox"

interface InfoIconProps {
	src: string,
	alt: string
}

const InfoIcon : React.FC<InfoIconProps> = ({
	children, src, alt
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef()

	const handleIconClick = () => setIsOpen(true)
	useClickOutside(ref, () => setIsOpen(false))

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

export default InfoIcon;