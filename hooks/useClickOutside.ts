import {useEffect} from "react"

export const useClickOutside = <T extends HTMLElement>(
	ref: React.RefObject<T>, callback: (e : MouseEvent | TouchEvent) => void
) => {
	useEffect(() => {
		const listener = (e : MouseEvent | TouchEvent) => {
			if (!ref.current) return
			if (!ref.current.contains(e.target as Node)) callback(e)
		}
		document.addEventListener("mousedown", listener)
		document.addEventListener("touchstart", listener)
		return () => {
			document.removeEventListener("mousedown", listener)
			document.removeEventListener("touchstart", listener)
		}
	}, [ref, callback])
}

export default useClickOutside