import "../styles/globals.scss"
import type { AppProps } from "next/app";
import { useState } from 'react';
import {IdentityContextProvider, Identity} from "../context/IdentityContext"
import {MobileContextProvider} from "../context/MobileContext";
import {SkillFilterContextProvider} from "../context/SkillFilterContext"


const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
	const [identity, setIdentity] = useState(Identity.ROBOT)
	const [skillFilter, setSkillFilter] = useState(new Set<string>())

	return <IdentityContextProvider 
		identity={identity} 
		setIdentity={setIdentity}
	>
		<SkillFilterContextProvider 
			skillFilter={skillFilter} 
			setSkillFilter={setSkillFilter}
		>
			<MobileContextProvider>
				<Component {...pageProps} />
			</MobileContextProvider>
		</SkillFilterContextProvider>
	</IdentityContextProvider>
}

export default MyApp