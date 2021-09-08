import React, { useEffect, useState } from "react"

export const DiceLog = ({ diceRolls }) => {
	const [log, setLog] = useState([])
	const { outcome} = diceRolls
	const diceSet = ['force', 'ability', 'proficiency', 'boost', 'difficulty', 'challenge', 'setback']

	let countOutcome;



	useEffect(() => {
		if (outcome) {
			const translation = outcome.filter(entry => {
				return entry.length
			}).map((result) => {
				const diceIndex = (outcome.indexOf(result))
				const logEntry = countOutcome(result, diceIndex)
				const newEntry = logEntry.props.children
				log.length && !log < 1 ? setLog(newEntry) : setLog(...log, newEntry)
			})
			return translation
		}
	}, [outcome, countOutcome, log])


	countOutcome = (result, i) => {
		const die = diceSet[i]
		const dieAmount = diceRolls[die]

		const totalResult = result.reduce((acc, dieValues) => {
				dieValues.map(value => {
				if (!acc[value]) {
					acc[value] = 0
				} 
					return acc[value]++
			})
			return acc
		}, {})

		

			return (
				<>{`You rolled ${dieAmount} ${die}`}</>		
			)
	};

	return (
		<article className='roll-log'>
			<p className='entry'>	{log} </p>
		</article>
	)
}