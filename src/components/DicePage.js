import react from "react"
import { Die } from "./Die"

export const DicePage = () => {
	return (
		<section className='dice-sheet'>
			<h2>Dice Log</h2>
			<h3>Dice</h3>
			<h3>Amount</h3>
			<Die/>
		</section>
	)
}