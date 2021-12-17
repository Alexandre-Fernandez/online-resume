interface SectionProps {
	type: "main" | "side",
	name: string,
	className?: string
}

const Section: React.FC<SectionProps> = ({children, type, name, className}) => {
	return <section 
		className={`section
		${type === "main" ? " section--main" : "section--side "}
		${className ? "section--" + className : ""}`
	}>
		<h2>{name.toUpperCase()}</h2>
		{children}
	</section>
}
 
export default Section;