import { Die } from "./Die"
import { dice } from "../utilities/dice"
import { useReducer } from "react";
import { diceReducer } from "../utilities/diceReducer";

const initialState = {
	force: 0,
	ability: 0,
	profecieny: 0,
	boost: 0,
	difficulty: 0,
	challenge: 0,
	setback: 0
}

export const DicePage = () => {
  const [state, dispatch] = useReducer(diceReducer, initialState);
	
		const handleRoll = (type, value) => {
			dispatch({state, type: 'SETDIE', die: type, value: value})

		}

	const diceSet = dice.map(die => {
		const {type, sides, scenario} = die
		return	(
		<Die key={type} die={type} sides={sides} scenario={scenario} roll={handleRoll} />
		)
	})

	

	return (
		<section className='dice-sheet'>
			<h2>Dice Log</h2>
			<div className='dice-field'>
				<div className="dice-headings">
					<h3 className='heading'>Dice</h3>
					<h3 className='heading'>Amount</h3>
				</div>
					{diceSet }
			</div>
		</section>
	)
}