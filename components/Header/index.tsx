import styles from "./Header.module.scss"
import Socials from "../Socials"

const picturePath = "/alex.jpg"

const Header : React.FC = () => {
	return <header className={styles.header}>
		<div className={styles.picture_container}>
			<div className={styles.picture_wrapper}>
				<img src={picturePath} className={styles.picture} alt="Resume picture"/>
			</div>
			<Socials/>
		</div>
		<section className={styles.heading_section}>
			<h1 className={styles.name}>ALEXANDRE FERNANDEZ</h1>
			<p className={styles.job + " subheading"}>Développeur web full stack</p>
		</section>
	</header>
}

export default Header