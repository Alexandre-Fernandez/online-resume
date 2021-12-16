import styles from "./Sidebar.module.scss"



const Sidebar : React.FC = ({children}) => {
	return <aside className={styles.sidebar}>
		{children}
	</aside>
}


export default Sidebar