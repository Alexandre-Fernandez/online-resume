import styles from "./PopUpBackround.module.scss"
import {useRef} from "react"
import withPortal from "../../hoc/withPortal"

interface PopUpBackroundProps {
	onClick: () => void,
	children: any
}

const PopUpBackround : React.FC<PopUpBackroundProps> = ({children, onClick}) => {
	const ref = useRef(null)

	const handleClick = (e : React.MouseEvent) => {
		if(e.target === ref.current) onClick()
	}

	return <div className={styles.popup_wrapper} ref={ref} onClick={handleClick}>
		{children}
	</div>
}

export default withPortal(PopUpBackround)