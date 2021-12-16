interface SectionProps {
	type: "main" | "side",
	name: string,
}

const Section: React.FC<SectionProps> = ({children, type, name}) => {
	return <section className={`section section${type === "main" ? "--main" : "--side"}`}>
		<h2>{name.toUpperCase()}</h2>
		{children}
	</section>
}
 
export default Section;