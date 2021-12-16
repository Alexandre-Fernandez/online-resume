import styles from "./Socials.module.scss"
import InfoIcon from "../InfoIcon"

const linkedin = "https://www.linkedin.com/in/alexandre--fernandez/"
const github = "https://github.com/Alexandre-Fernandez"


const Socials : React.FC = () => {
	return <div className={styles.socials}>
		<ul className={styles.socials__list}>
			<li className={styles.socials__item}>
				<InfoIcon src="/phone.svg" alt="Phone">
					<a href="tel:0033619670544">+33 (0) 6 19 67 05 44</a>
				</InfoIcon>
			</li>
			<li className={styles.socials__item}>
				<InfoIcon src="/email.svg" alt="Email">
					<a href="mailto:a.fernandez.martinez@outlook.com">a.fernandez.martinez@outlook.com</a>
				</InfoIcon>
			</li>
			<li className={styles.socials__item}>
				<InfoIcon src="/pin.svg" alt="Location" isProtected={false}>
					<p>Paris, France</p>
				</InfoIcon>
			</li>
			<li className={styles.socials__item}>
				<a className={styles.socials__link} href={linkedin}>
					<img src="/linkedin.svg" alt="LinkedIn"/>
				</a>
			</li>
			<li className={styles.socials__item}>
				<a className={styles.socials__link} href={github}>
					<img src="/github.svg" alt="GitHub"/>
				</a>
			</li>
		</ul>
	</div>
}

export default Socials