import {useState, useContext, useEffect} from "react"
import {MobileContext} from "../../context/MobileContext"
import SidebarToggleButton from "../SidebarToggleButton"


const Sidebar : React.FC = ({children}) => {
	const isMobile = useContext(MobileContext)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const handleToggleClick = () => setIsSidebarOpen(!isSidebarOpen)
	const handlerSidebarClick = (e : React.MouseEvent) => {
		if(!isMobile) return
		let i = e.target as HTMLElement
		while(i) {
			if(i.tagName === "BUTTON") return
			i = i.parentElement
		}
		setIsSidebarOpen(false)
	}

	return <aside 
		className={`sidebar${isMobile && !isSidebarOpen ? " hidden" : ""}`} 
		onClick={handlerSidebarClick}
	>
		{children}
		{isMobile && <SidebarToggleButton onClick={handleToggleClick}/>}
	</aside>
	
}

export default Sidebar