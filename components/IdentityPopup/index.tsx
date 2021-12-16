import styles from "./IdentityPopup.module.scss"
import IdentityTest from "../IdentityTest"

const IdentityPopup: React.FC = () => {
	return <div className="popup">
		<h2 className={styles.heading}>Êtes-vous un robot ?</h2>
		<p className={styles.explanation}>Merci de répondre au test suivant pour continuer :</p>
		<IdentityTest/>
	</div>
}

export default IdentityPopup;