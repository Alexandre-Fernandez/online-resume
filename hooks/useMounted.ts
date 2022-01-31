import {useState, useEffect} from "react"

const useMounted = (defaultValue: any = false) => {
	const [isMounted, setIsMounted] = useState(defaultValue)

	useEffect(() => {
		setIsMounted(true)
	}, []);

	return isMounted
}

export default useMounted