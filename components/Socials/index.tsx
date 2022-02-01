import InfoIcon from "../InfoIcon"
import ProtectedInfoIcon from "../InfoIcon/ProtectedInfoIcon"

const phoneNumber = ""
const emailAddress = ""
const linkedin = "https://www.linkedin.com/in/alexandre--fernandez/"
const github = "https://github.com/Alexandre-Fernandez"

const Socials : React.FC = () => {
	return <div className="socials">
		<ul className="socials__list">
			<li className="socials__item">
				<ProtectedInfoIcon src="/phone.svg" alt="Phone">
					<a href="tel:">{phoneNumber}</a>
				</ProtectedInfoIcon>
			</li>
			<li className="socials__item">
				<ProtectedInfoIcon src="/email.svg" alt="Email">
					<a href="mailto:">{emailAddress}</a>
				</ProtectedInfoIcon>
			</li>
			<li className="socials__item">
				<InfoIcon src="/pin.svg" alt="Location">
					<p>Paris, France</p>
				</InfoIcon>
			</li>
			<li className="socials__item">
				<a className="socials__link" href={linkedin} target="_blank" rel="noreferrer">
					<img src="/linkedin.svg" alt="LinkedIn"/>
				</a>
			</li>
			<li className="socials__item">
				<a className="socials__link" href={github} target="_blank" rel="noreferrer">
					<img src="/github.svg" alt="GitHub"/>
				</a>
			</li>
		</ul>
	</div>
}

export default Socials
