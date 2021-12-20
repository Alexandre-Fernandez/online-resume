import withPortal from "../../hoc/withPortal"
 
interface SidebarToggleButtonProps {
	onClick: (e: React.MouseEvent) => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({onClick}) => {
	return <button className="sidebar-toggle-btn" onClick={onClick}>
		<img src="/filter.svg"/>
	</button>
}
 
export default withPortal(SidebarToggleButton);