import Head from "next/head"
import {Skills} from "../types"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Section from "../components/Section"
import Experience from "../components/Experience"
import Accomplishment from "../components/Accomplishment"
import SkillCategory from "../components/SkillCategory"
import ContactForm from "../components/ContactForm"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useTranslation} from "next-i18next/"

export async function getStaticProps({locale}) {
	return {
		props: {
			...(await serverSideTranslations(locale))
		}
	}
}

const yearsOfExperience = () => (Math.abs(new Date(
	Date.now() - new Date(2021, 1, 1).getTime()
).getUTCFullYear() - 1970) || 1).toString()


const Index : React.FC = () => {
	const {t} = useTranslation()

	return <>
		<Head>
			<title>{`Alexandre Fernandez ${" - " + t("common:resume")}`}</title>
			<meta charSet="utf-8"/>
			<meta name="author" content="Alexandre Fernandez"/>
			<meta name="description" content={
				`${t("index:sidebar__about__p1").replace("#", yearsOfExperience())} 
				${t("index:sidebar__about__p2")}`
			}/>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div id="portal"></div>
		<Header />
		<main>
			<Sidebar>
				<Section type="side" className="about" name={t("index:sidebar__about")}>
					<p>{t("index:sidebar__about__p1").replace("#", yearsOfExperience())}</p>
					<p>{t("index:sidebar__about__p2")}</p>
				</Section>
				
				<Section type="side" className="skills" name={t("index:sidebar__skills")}>
					<SkillCategory 
						name="Full stack" 
						tags={[Skills.JAVASCRIPT, Skills.TYPESCRIPT, Skills.NODEJS, Skills.NEXT, Skills.EJS, Skills.WORDPRESS]}
					/><SkillCategory 
						name="Back-end" 
						tags={[Skills.EXPRESS, Skills.MYSQL, Skills.MONGODB, Skills.MONGOOSE]}
					/><SkillCategory 
						name="Front-end" 
						tags={[Skills.REACT, Skills.REACT_NATIVE, Skills.REDUX, Skills.WEBPACK, Skills.JQUERY, Skills.HTML, Skills.CSS, Skills.SASS]}
					/><SkillCategory 
						name="Software" 
						tags={[Skills.PHOTOSHOP, Skills.ILLUSTRATOR, Skills.XD, Skills.VEGAS, Skills.UNITY, Skills.GODOT, Skills.BLENDER, Skills.WORD, Skills.EXCEL, Skills.POWERPOINT, Skills.AUDACITY]}
					/><SkillCategory 
						name={t("index:sidebar__skills__languages")}
						tags={[Skills.FRENCH, Skills.ENGLISH, Skills.SPANISH]}
					/><SkillCategory 
						name={t("index:sidebar__skills__misc")}
						tags={[Skills.GIT, Skills.SEO, Skills.RESPONSIVE, Skills.UIUX, Skills.API_REST, Skills.SECURITY, Skills.MVC, Skills.BEM, Skills.CS, Skills.CPP, Skills.GDSCRIPT, Skills.PATTERNS, Skills.DATA_STRUCT, Skills.OOP, Skills.GAME_DEV, Skills.DB_DESIGN, Skills.DEPLOY, Skills.TESTING, Skills.APP_DESIGN]}
					/>
				</Section>
			</Sidebar>

			<div className="main-content">
				<Section type="main" name={t("index:main__work-experience")}>
					<Experience 
						title={t("index:main__operations-manager")}
						subtitle="CITY BUS" 
						duration="2016-2020"
						link="http://www.citybusparis.com/"
					>
						<Accomplishment>
							{t("index:main__operations-manager-1")}
						</Accomplishment><Accomplishment>
							{t("index:main__operations-manager-2")}
						</Accomplishment><Accomplishment>
							{t("index:main__operations-manager-3")}
						</Accomplishment>
					</Experience>
					<Experience 
						title={t("index:main__call-center-supervisor")}
						subtitle="Business Support Services – B2S" 
						duration="2014-2015"
						link="https://www.linkedin.com/company/b2s/"
					>
						<Accomplishment>
							{t("index:main__call-center-supervisor-1")}
						</Accomplishment><Accomplishment>
							{t("index:main__call-center-supervisor-2")}
						</Accomplishment><Accomplishment>
							{t("index:main__call-center-supervisor-3")}
						</Accomplishment>
					</Experience>
				</Section>

				<Section type="main" name={t("index:main__education")}>
					<Experience 
						title={t("index:main__application-designer-developer")}
						qualification={t("index:main__application-designer-developer-qualification")}
						subtitle="3W Academy" 
						duration="2022-2023"
						link="https://www.francecompetences.fr/recherche/rncp/31678/"
						tags={[Skills.DB_DESIGN, Skills.MYSQL, Skills.OOP, Skills.UIUX, Skills.SECURITY, Skills.DEPLOY, Skills.TESTING, Skills.APP_DESIGN, Skills.JAVASCRIPT, Skills.NODEJS, Skills.EXPRESS, Skills.REACT]}
					>
					</Experience><Experience 
						title={t("index:main__full-stack-web-developer")}
						qualification={t("index:main__full-stack-web-developer-qualification")}
						subtitle="3W Academy" 
						duration="2021-2022"
						link="https://www.francecompetences.fr/recherche/rncp/34393/"
						tags={[Skills.REACT, Skills.REACT_NATIVE, Skills.EXPRESS, Skills.API_REST, Skills.HTML, Skills.CSS, Skills.JAVASCRIPT, Skills.MYSQL, Skills.REDUX, Skills.JQUERY, Skills.NODEJS, Skills.MONGODB, Skills.MONGOOSE, Skills.EJS, Skills.RESPONSIVE, Skills.GIT, Skills.OOP, Skills.MVC]}
					>
					</Experience><Experience 
						title={t("index:main__self-study")}
						subtitle={t("index:main__self-study-subtitle")}
						duration="2013-2021"
						tags={[Skills.CPP, Skills.CS, Skills.UNITY, Skills.GDSCRIPT, Skills.GODOT, Skills.GAME_DEV, Skills.OOP, Skills.PATTERNS, Skills.DATA_STRUCT, Skills.WORDPRESS, Skills.BLENDER]}
					>
					</Experience><Experience 
						title={t("index:main__high-school-diploma")}
						subtitle={t("index:main__high-school-diploma-subtitle")}
						duration="2011-2012"
						link="http://iesgilycarrasco.centros.educa.jcyl.es/"
					>
					</Experience>
				</Section>

				<Section type="main" name={t("index:main__projects")}>
					<Experience 
						title={t("index:main__online-resume")}
						subtitle={t("index:main__online-resume-subtitle")}
						duration="2021"
						tags={[Skills.NEXT, Skills.REACT, Skills.TYPESCRIPT, Skills.SASS, Skills.NODEJS, Skills.ILLUSTRATOR, Skills.HTML, Skills.FRENCH, Skills.ENGLISH, Skills.SPANISH, Skills.BEM, Skills.UIUX, Skills.XD, Skills.RESPONSIVE]}
					/><Experience 
						title="VWMS Solutions"
						subtitle={t("index:main__vwms-subtitle")}
						duration="2021"
						link="https://github.com/Alexandre-Fernandez/vwms-frontend"
						tags={[Skills.WEBPACK, Skills.JAVASCRIPT, Skills.SASS, Skills.REDUX, Skills.NODEJS, Skills.PHOTOSHOP, Skills.ILLUSTRATOR, Skills.HTML, Skills.CSS, Skills.UIUX, Skills.XD]}
					/><Experience 
						title="Color Republic"
						subtitle={t("index:main__color-republic-subtitle")}
						duration="2021"
						link="https://github.com/Alexandre-Fernandez/color-republic-backend"
						tags={[Skills.REACT, Skills.EXPRESS, Skills.MYSQL, Skills.REDUX, Skills.NODEJS, Skills.PHOTOSHOP, Skills.ILLUSTRATOR, Skills.VEGAS, Skills.HTML, Skills.CSS, Skills.UIUX, Skills.SECURITY, Skills.RESPONSIVE]}
					/><Experience 
						title="Tetris Game Boy Remake" 
						duration="2021"
						tags={[Skills.JAVASCRIPT, Skills.OOP, Skills.PHOTOSHOP, Skills.AUDACITY, Skills.GAME_DEV, Skills.HTML]}
					/>
				</Section>

				<Section type="main" name={t("index:main__contact")}>
					<ContactForm/>
				</Section>
			</div>
		</main>
	</>
}

export default Index