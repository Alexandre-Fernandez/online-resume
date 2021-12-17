import {useRef} from "react"
import withPortal from "../../hoc/withPortal"

interface PopUpBackroundProps {
	onClick?: () => void,
	children: any
}

const PopUpBackground : React.FC<PopUpBackroundProps> = ({children, onClick}) => {
	const ref = useRef(null)

	const handleClick = (e : React.MouseEvent) => {
		if(e.target === ref.current) onClick()
	}

	return <div className="popup-background" ref={ref} onClick={handleClick}>
		{children}
	</div>
}

export default withPortal(PopUpBackground)