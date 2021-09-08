import React, { useEffect, useState } from "react"

export const DiceLog = ({ diceRolls }) => {
	const [logs, setLogs] = useState([])
	const { outcome } = diceRolls
	const diceSet = ['force', 'ability', 'proficiency', 'boost', 'difficulty', 'challenge', 'setback']

	let countOutcome;

	
	useEffect(() => {
		const entries = []
		if (outcome) {
			const translation = outcome.filter(entry => {
				return entry.length
			}).map((result) => {
				setLogs([])
				const diceIndex = (outcome.indexOf(result))
				const logEntry = countOutcome(result, diceIndex)
				entries.push(logEntry)
				return setLogs(...logs, entries)
			})
			return translation
		}
	}, [outcome, countOutcome])


	countOutcome = (result, i) => {
		const die = diceSet[i]

		const totalResult = result.reduce((acc, dieValues) => {
			 dieValues.map(value => {
				if (!acc[value]) {
					acc[value] = 0
				}
				return acc[value]++
			})
			return acc
		}, {})
		

		const getPhrases = Object.keys(totalResult).map(face => {
			return (
				<p>{`You rolled a ${die} die and got ${totalResult[face]} ${face}`}<br/></p>
			)
		})

		const parsedPhrases = getPhrases.map(phrase => {
			return phrase.props.children
		})

		return parsedPhrases
	};


	return (
		<article className='roll-log'>
				<p className='entry'>{logs}</p>
		</article>
	)
}