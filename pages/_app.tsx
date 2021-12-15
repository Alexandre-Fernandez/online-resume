import "../styles/globals.scss"
import type { AppProps } from "next/app";
import { useState } from 'react';
import {IdentityContextProvider, Identity} from "../context/IdentityContext"
import {MobileContextProvider} from "../context/MobileContext";

const MyApp : React.FC<AppProps> = ({ Component, pageProps }) => {
	const [identity, setIdentity] = useState(Identity.ROBOT)

	return <IdentityContextProvider identity={identity} setIdentity={setIdentity}>
		<MobileContextProvider>
			<Component {...pageProps} />
		</MobileContextProvider>
	</IdentityContextProvider>
}

export default MyApp