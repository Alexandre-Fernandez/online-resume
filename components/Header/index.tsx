import Socials from "../Socials"

const picturePath = "/alex.jpg"

const Header : React.FC = () => {
	return <header className="header">
		<div className="header__profile">
			<div className="header__picture-wrapper">
				<img src={picturePath} className="header__picture" alt="Resume picture"/>
			</div>
			<Socials/>
		</div>
		<section className="header__heading heading">
			<h1 className="heading__name">ALEXANDRE FERNANDEZ</h1>
			<p className={"heading__job subheading"}>Développeur web full stack</p>
		</section>
	</header>
}

export default Header