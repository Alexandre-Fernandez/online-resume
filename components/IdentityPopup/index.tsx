import IdentityTest from "../IdentityTest"

const IdentityPopup: React.FC = () => {
	return <div className="identity-popup popup">
		<h2 className="identity-popup__heading">Êtes-vous un robot ?</h2>
		<p className="identity-popup__description">Merci de répondre au test suivant pour continuer :</p>
		<IdentityTest parentClass="identity-popup"/>
	</div>
}

export default IdentityPopup;