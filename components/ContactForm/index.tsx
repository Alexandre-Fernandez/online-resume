import {useState, useEffect, useRef} from "react"
import {isEmailValid} from "../../lib/helpers"
import withCaptcha from "../../hoc/withCaptcha"
import useProtectedToggle from "../../hooks/useProtectedToggle"
import {sendEmail} from "../../lib/email"
import {useTranslation} from "next-i18next/"

interface ContactFormProps {
	startCaptcha?: () => void
}
 
const ContactForm: React.FC<ContactFormProps> = ({startCaptcha}) => {
	const [isActive, tryActivate] = useProtectedToggle()
	const [[email, emailErr], setEmail] = useState<[string, boolean]>(["", false])
	const [message, setMessage] = useState("")
	const [isEmailSent, setIsEmailSent] = useState(false)
	const ref = useRef()
	const {t} = useTranslation()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if(!isActive) {
			startCaptcha()
			return tryActivate()
		}
		if(!isEmailValid(email)) return setEmail([email, true])
		if(message.length > 9) sendEmail(e.target as HTMLFormElement)
		setIsEmailSent(true)
	}

	useEffect(() => { // resubmits after captcha
		if(isActive && ref?.current) (ref.current as HTMLButtonElement).click()
	}, [isActive]);

	return isEmailSent 
	? <div className="sent-email-message-wrapper"><strong className="sent-email-message">
		{t("index:main__contact-thanks")}
	</strong></div>
	: <form className="contact-form" onSubmit={handleSubmit} noValidate>
		<label className="contact-form__email-label label" htmlFor="form-email">{t("index:main__your-email")}</label>
		<div className="contact-form__input-container">
			<input 
				className="contact-form__email-input input" 
				type="email" 
				name="email" 
				id="form-email"
				value={email}
				onChange={e => setEmail([e.target.value, false])}
			/>{
			emailErr && <strong>{t("index:main__contact-email-error")}</strong>
		}</div>
		<label className="contact-form__message-label label" htmlFor="form-message">{t("index:main__your-message")}</label>
		<div className="contact-form__input-container">
			<textarea 
				className="contact-form__message-input input" 
				name="message" 
				id="form-message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
		</div>
		<input className="contact-form__submit-input" type="submit" value="Envoyer" ref={ref}/>
	</form>
	
}
 
export default withCaptcha(ContactForm);


/* error:
{
  "status": 400,
  "text": "The service ID is invalid To find this ID, visit https://dashboard.emailjs.com/admin"
}
OK:
{
  "status": 200,
  "text": "OK"
}
*/