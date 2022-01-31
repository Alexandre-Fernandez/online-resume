export const getRandomIntBetween = (min : number, max : number) => Math.floor(
	Math.random() * (max - min + 1) + min
)

export const isEmailValid = (value: string) => {
	if(!value) return false
	value = value.toLowerCase()
	let allowedChars = new Set("abcdefghijklmnopqrstuvwxyz")
	let email = value.split("@")
	if(email.length !== 2) return false
	email = [email[0], ...email[1].split(".")]
	if(email.length !== 3 || !email[0] || !email[1] || !email[2]) return false
	const [ localPart, domain, extension ] = email
	if(localPart.length > 64 || domain.length > 63) return false
	if(!allowedChars.has(localPart[0]) || !allowedChars.has(domain[0])) return false
	if(domain[domain.length - 1] === "-") return false
	if(domain.length > 3 && domain[2] === "-" && domain[3] === "-") return false
	if(localPart[localPart.length - 1] === ".") return false
	for(let i = 0; i < extension.length; i++) { 
		if(!allowedChars.has(extension[i])) return false
	}
	allowedChars = new Set([...allowedChars, ..."0123456789-"])
	for(let i = 0; i < domain.length; i++) { 
		if(!allowedChars.has(domain[i])) return false
	}
	allowedChars = new Set([...allowedChars, ..."_."])
	for(let i = 0; i < localPart.length; i++) { 
		if(!allowedChars.has(localPart[i])) return false
		if(localPart[i] === "." && localPart[i + 1] && localPart[i + 1] === ".") return false
	}
	return true
}