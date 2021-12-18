import {useState, useEffect, useContext} from "react"
import {IdentityContext, Identity} from "../../context/IdentityContext"
import {isEmailValid} from "../../lib/helpers"


interface ContactFormProps {
}
 
const ContactForm: React.FC<ContactFormProps> = () => {
	const [identity, setIdentity] = useContext(IdentityContext)
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")


	useEffect(() => {
		console.log(message)
	}, [message]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		

		console.log(e.target)
	}

	return <form className="contact-form" onSubmit={handleSubmit} noValidate>
		<label className="contact-form__label" htmlFor="form-email">Votre E-mail</label>
		<input 
			className="contact-form__input" 
			type="email" 
			name="email" 
			id="form-email"
			value={email}
			onChange={e => setEmail(e.target.value)}
		/>
		<label className="contact-form__label" htmlFor="form-message">Votre Message</label>
		<textarea 
			className="contact-form__textarea" 
			name="message" 
			id="form-message"
			value={message}
			onChange={e => setMessage(e.target.value)}
		/>
		<input className="contact-form__submit-btn" type="submit" value="Envoyer"/>
	</form>
}
 
export default ContactForm;