interface InfoBoxProps {
	parentClass?: string
}

const InfoBox: React.FC<InfoBoxProps> = ({children, parentClass}) => {
	return <div className={`${parentClass ? parentClass + "__info-box " : ""}info-box`}>
		{children}
	</div>
}
 
export default InfoBox;