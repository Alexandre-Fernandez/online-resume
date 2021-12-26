import Socials from "../Socials"
import {useTranslation} from "next-i18next/"

const Header : React.FC = () => {
	const {t} = useTranslation()

	return <header className="header">
		<div className="header__profile">
			<div className="header__picture-wrapper">
				<img 
					className="header__picture" 
					src="/alex600.jpg"
					srcSet="/alex200.jpg 200w, /alex400.jpg 400w, /alex600.jpg 600w, alex1200.jpg 1200w"
					sizes="30vw"
					alt="Resume picture"
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