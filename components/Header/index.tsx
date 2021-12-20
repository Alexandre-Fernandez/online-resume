import Socials from "../Socials"
import {useTranslation} from "next-i18next/"


const Header : React.FC = () => {
	const {t} = useTranslation()

	return <header className="header">
		<div className="header__profile">
			<div className="header__picture-wrapper">
				<img 
					className="header__picture" 
					alt="Resume picture"
					src="/alex1000.jpg"
					srcSet="/alex1000.jpg 1000w, /alex600.jpg 600w, /alex400.jpg 400w"
				/>
			</div>
			<Socials/>
		</div>
		<section className="header__heading heading">
			<h1 className="heading__name">ALEXANDRE FERNANDEZ</h1>
			<p className={"heading__job subheading"}>{t("index:header__job")}</p>
		</section>
	</header>
}

export default Header