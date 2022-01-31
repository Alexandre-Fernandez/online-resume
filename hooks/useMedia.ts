import {useState, useEffect} from "react"

const useMedia = (query : string) => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		setMatches(window.matchMedia(query).matches)
	}, [])

	useEffect(() => {
		const media = window.matchMedia(query)
		const listener = (e : MediaQueryListEvent) => setMatches((e.target as MediaQueryList).matches)
		media.addEventListener("change", listener)
		return () => media.removeEventListener("change", listener)
	}, [matches])
	
	return matches
}

export default useMedia