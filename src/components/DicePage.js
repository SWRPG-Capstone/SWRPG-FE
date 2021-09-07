import { Die } from "./Die"
import { dice } from "../utilities/dice"

export const DicePage = () => {
	const diceType = dice.map(die => <Die key={die} die={die} />)

	return (
		<section className='dice-sheet'>
			<h2>Dice Log</h2>
			<div className='dice-field'>
				<div className="dice-headings">
					<h3 className='heading'>Dice</h3>
					<h3 className='heading'>Amount</h3>
				</div>
					{diceType}
			</div>
		</section>
	)
}