import "../styles/globals.scss"
import type {AppProps} from "next/app"
import {useState} from "react"
import {appWithTranslation} from "next-i18next"
import {IdentityContextProvider, Identity} from "../context/IdentityContext"
import {MobileContextProvider} from "../context/MobileContext"
import {SkillFilterContextProvider} from "../context/SkillFilterContext"
import useMedia from "../hooks/useMedia"

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
	const [identity, setIdentity] = useState(Identity.ROBOT)
	const [skillFilter, setSkillFilter] = useState(new Set<string>())
	const isMobile = useMedia("(max-width: 800px)")

	return <IdentityContextProvider 
		identity={identity} 
		setIdentity={setIdentity}
	>
		<SkillFilterContextProvider 
			skillFilter={skillFilter} 
			setSkillFilter={setSkillFilter}
		>
			<MobileContextProvider >
				<Component {...pageProps} />
			</MobileContextProvider>
		</SkillFilterContextProvider>
	</IdentityContextProvider>
}

export default appWithTranslation(MyApp)