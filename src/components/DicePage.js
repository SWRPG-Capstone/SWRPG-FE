import { Die } from "./Die"
import { dice } from "../utilities/dice"
import { useContext, useState } from "react";
import { UserContext } from "../utilities/UserContext";



export const DicePage = () => {
  const { state , dispatch } = useContext(UserContext);
	const [isActive, setActive] = useState(false);
	const [log, setLog] = useState(''); 
	
		const handleRoll = (type, value) => {
			dispatch({state, action: {type: 'SETDIE', die: type, value: value}})
		}

	const diceSet = dice.map(die => {
		const {type, sides, scenario} = die
		return	(
		<Die key={type} die={type} sides={sides} scenario={scenario} roll={handleRoll} />
		)
	})



	return (
		<section className='dice-sheet'>
			<button className={`open-log-button ${isActive && 'active' }`} onClick={() => setActive(!isActive)}>Dice Log</button>
			<article className={`dice-log ${!isActive && 'hidden' }`}>

			</article>
			<div className='dice-field'>
				<div className="dice-headings">
					<h3 className='heading'>Dice</h3>
					<h3 className='heading'>Amount</h3>
				</div>
					{diceSet}
			</div>
		</section>
	)
}