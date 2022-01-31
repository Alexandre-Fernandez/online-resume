import emailjs from 'emailjs-com';

export const sendEmail = async (form: HTMLFormElement) => {
	try {
		const result = await emailjs.sendForm(
			"service_pplmzdl",
			"template_p0d9hjm", 
			form, 
			"user_yBqWQD5WzAw56pya6auZo"
		)
		return result
	} catch(err) {
		return err
	}
}