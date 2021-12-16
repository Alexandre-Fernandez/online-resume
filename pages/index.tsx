import Head from "next/head"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Section from "../components/Section"
import Experience from "../components/Experience"
import Accomplishment from "../components/Accomplishment"
import {Skills} from "../types"

// SkillContext(new Set()) // The tag component interacts with context

// All .content components except section titles dissapear if atleast one tag 
// is selected and none of their tag matches it

// Content section children register all their children by tag (as id) 
// and choose to display them or not if none of their children matches 
// they add hidden class to themselves

/*

context = new Set(React, NodeJS, Javascript, Typescript) 

tag parent:
by relevance [React, Typescript, NodeJS, ...].map(tag => <Tag name={tag}/>)
on context change loop thorugh array
*/




const Index : React.FC = () => {
	return <>
		<Head>
			<title>Alexandre Fernandez</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<div id="portal"></div>
		<Header />
		<main>
			<Sidebar>
				<Section type="side" name="À PROPOS" >
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				</Section>
				<Section type="side" name="COMPÉTENCES">
					<p>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus</p>
				</Section>
			</Sidebar>
			<div className="content">
				<Section type="main" name="EXPÉRIENCES PROFESSIONNELLES">
					<Experience 
						title="Responsable d'exploitation" 
						subtitle="CITY BUS" 
						duration="2016-2020"
					>
						<Accomplishment tags={[Skills.CS, Skills.CSS, Skills.EJS]}>
							Supervision du planning et gestion de ses changements en cas de	problème (véhicules en panne, retards chauffeur, etc).
						</Accomplishment>
						<Accomplishment tags={[Skills.CS, Skills.CSS, Skills.EJS]}>
							Détermination des besoins en ressources humaines et en véhicules.
						</Accomplishment>
						<Accomplishment tags={[Skills.API_REST]}>
							Tableaux de bords, suivi des dossiers clients, devis, saisies, etc...
						</Accomplishment>
					</Experience>
					<Experience 
						title="Superviseur en centre d’appels" 
						subtitle="Business Support Services – B2S" 
						duration="2014-2015"
					>
						<Accomplishment tags={[Skills.CSS, Skills.EJS, Skills.BLENDER]}>
							Gestion de l’équipe (performances, disponibilités et incidents).
						</Accomplishment>
						<Accomplishment tags={[Skills.EJS, Skills.API_REST, Skills.CPP]}>
							Revue des performances collectives et individuelles et établissement de la stratégie coaching du mois.
						</Accomplishment>
						<Accomplishment tags={[Skills.API_REST, Skills.CSS]}>
							Assurer le respect des normes qualité Nissan.
						</Accomplishment>
					</Experience>
				</Section>
			</div>
		</main>
	</>
}

export default Index

/* Large screens ----------- */
/*some CSS*/

/* Desktops and laptops ----------- */
//@media only screen and (max-width : 1824px) {...}

/* iPads (landscape) ----------- */
//@media only screen and (max-width : 1224px) {...}

/* iPads (portrait) ----------- */
//@media only screen and (max-width : 1024px) {...}

/* Smartphones (landscape) ----------- */
//@media only screen and (max-width : 768px) {...}

/* Big smartphones (portrait) (ie: Galaxy 3 has 360)*/
//@media only screen and (max-width : 640px) {...}

/* Smartphones (portrait) (ie: Galaxy 1) */
//@media only screen and (max-width : 321px) {...}