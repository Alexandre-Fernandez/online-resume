import IdentityTest from "../IdentityTest"
import {useTranslation} from "next-i18next/"

const IdentityPopup: React.FC = () => {
	const {t} = useTranslation()

	return <div className="identity-popup popup">
		<h2 className="identity-popup__heading">{t("index:identity-popup__heading")}</h2>
		<p className="identity-popup__description">{t("index:identity-popup__description")}</p>
		<IdentityTest parentClass="identity-popup"/>
	</div>
}

export default IdentityPopup;