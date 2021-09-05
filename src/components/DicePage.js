import { Die } from "./Die"
import { dice } from "../utilities/dice"

export const DicePage = () => {
	const diceType = dice.map(die => <Die die={die} />)

	return (
		<section className='dice-sheet'>
			<h2>Dice Log</h2>
			<h3>Dice</h3>
			<h3>Amount</h3>
			<div className='dice-field'>
				{diceType}
			</div>
		</section>
	)
}