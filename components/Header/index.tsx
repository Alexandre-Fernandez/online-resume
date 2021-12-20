import Image from 'next/image'
import Socials from "../Socials"
import {useTranslation} from "next-i18next/"

const Header : React.FC = () => {
	const {t} = useTranslation()

	return <header className="header">
		<div className="header__profile">
			<div className="header__picture-wrapper">
				<Image 
					className="header__picture" 
					width="3555"
					height="3555"
					alt="Resume picture"
					src="/alex.jpg"
					priority={true}
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