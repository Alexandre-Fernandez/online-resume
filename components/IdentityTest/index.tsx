import {useState, useEffect, useContext} from "react"
import {Challenge} from "../../types"
import {getRandomIntBetween} from "../../lib/helpers"
import {IdentityContext, Identity} from "../../context/IdentityContext"

// TODO: the best improvement to security would be the addition of a backend
// frontend improvements :
// - add pronunciations alt="" (eg: naynn, ninnne, etc) to the icons, 
//   this will make the website more accesible for humans and still hard to read by robots
// - add exponential delay after each failed test

const digits = [
	"/5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9.svg",
	"/6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b.svg",
	"/d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35.svg",
	"/4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce.svg",
	"/4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a.svg",
	"/ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d.svg",
	"/e7f6c011776e8db7cd330b54174fd76f7d0216b612387a5ffcfb81e6f0919683.svg",
	"/7902699be42c8a8e46fbbb4501726517e86b22c56a189f7625a6da49081b2451.svg",
	"/2c624232cdd221771294dfbb310aca000a0df6ac8b66b696d90ef06fdefb64a3.svg",
	"/19581e27de7ced00ff1ce50b2047e7a567c76b1cbaebabe5ef03f7c3017bb5b7.svg"
]

let uid = -1

interface ChallengeAnswersProps {
	currentChallenge: Challenge,
	onClick: (answer: number) => void,
	parentClass?: string
}
// Generates 9 buttons/possible answers
const ChallengeAnswers : React.FC<ChallengeAnswersProps> = ({parentClass, currentChallenge, onClick}) => {
	const [answers, setAnswers] = useState<number[]>([])

	useEffect(() => {
		const challengeSolutionIndex = getRandomIntBetween(0, 8)
		const temp = new Array(9).fill(0) //.forEach() won't trigger on FireFox without .fill()
		temp.forEach((_, i) => { 
			if(i === challengeSolutionIndex) return temp[i] = currentChallenge.solution
			let solution = new Challenge().solution
			while(temp.includes(solution) || solution === currentChallenge.solution) {
				solution = new Challenge().solution
			}
			temp[i] = solution
		})
		setAnswers(temp)
	}, [currentChallenge]);

	return <div className={`${parentClass ? parentClass + "__challenge-answers " : ""}challenge-answers`}>
		{
			answers.map(answer => <button 
				key={++uid}
				className="challenge-answers__answer-btn"
				onClick={() => onClick(answer)}
			>{
				answer > 9 
				? <>
					<img 
						className="challenge-answers__digit" 
						src={`/digits/${digits[parseInt(answer.toString()[0])]}`}
						alt="Digit"
					/><img 
						className="challenge-answers__digit" 
						src={`/digits/${digits[parseInt(answer.toString()[1])]}`}
						alt="Digit"
					/>
				</>
				: <img className="challenge-answers__digit" src={`/digits/${digits[answer]}`} alt="Digit"/>
			}</button>)
		}
	</div>
}


interface IdentityTestProps {
	parentClass?: string
}

const IdentityTest : React.FC<IdentityTestProps> = ({parentClass}) => {
	const [challenge, setChallenge] = useState(new Challenge())
	const [_, setIdentity] = useContext(IdentityContext)

	const handleClick = (answer : number) => {
		if(challenge.solution === answer) {
			return setIdentity(Identity.HUMAN)
		}
		setChallenge(new Challenge())
	}

	return <div className={`${parentClass ? parentClass + "__identity-test " : ""}identity-test`}>
		<div className="identity-test__challenge">
			<img className="identity-test__digit" src={`/digits/${digits[challenge.a]}`} alt="Digit"/>
			<span> + </span>
			<img className="identity-test__digit" src={`/digits/${digits[challenge.b]}`} alt="Digit"/>
			<span> = </span>
		</div>
		<ChallengeAnswers parentClass="identity-test" currentChallenge={challenge} onClick={handleClick}/>
	</div>
}
 
export default IdentityTest;