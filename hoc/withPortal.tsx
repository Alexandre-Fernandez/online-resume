import React from "react"
import ReactDOM  from "react-dom"
import useMounted from "../hooks/useMounted"

const withPortal = <P extends object>(
	Component : React.ComponentType<P>, querySelector = "#portal"
) => (props : P)  => {
	const isMounted = useMounted(null)
	return isMounted && ReactDOM.createPortal(
		<Component {...props}/>, 
		document.querySelector(querySelector)
	)
}

export default withPortal