import MobileContextProvider from "./MobileContext"
import IdentityContextProvider from "./IdentityContext"

const RootContextProvider : React.FC = ({children, identityContext}) => {
	return <MobileContextProvider>
		<IdentityContextProvider>
			{children}
		</IdentityContextProvider>
	</MobileContextProvider>
}

export default RootContextProvider;