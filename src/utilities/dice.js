const symbols = {
	blank: 'blank',
	success: 'success',
	triumph: 'triumph',
	advantage: 'advantage',
	failure: 'failure',
	despair: 'despair',
	threat: 'threat',
	darkPip: 'darkPip',
	lightPip: 'lightPip',
}

const { blank, success, triumph, advantage, failure, despair, threat, darkPip, lightPip } = symbols

export const diceFaces = {
	b: [blank],
	dP: [darkPip],
	dPdP: [darkPip, darkPip],
	lP: [lightPip],
	lPlP: [lightPip, lightPip],
	a: [advantage],
	aa: [advantage, advantage],
	sa: [success, advantage],
	ss: [success, success],
	s: [success],
	tr: [triumph],
	f: [failure],
	ff: [failure, failure],
	ft: [failure, threat],
	tt: [threat, threat],
	t: [threat],
	d: [despair]
}

const { b, dP, dPdP, lP, lPlP, a, aa, sa, ss, s, tr, f, ff, ft, tt, t, d } = diceFaces

export const dice = [
	{
		type: 'force',
		sides: 12,
		scenario: [dP, dP, dP, dP, dP, dP, dPdP, lP, lP, lPlP, lPlP, lPlP],
		amount: 0,
		rolls: [],
	},
	{
		type: 'ability',
		sides: 8,
		scenario: [b, s, s, ss, a, a, sa, aa],
		amount: 0
	},
	{
		type: 'proficiency',
		sides: 12,
		scenario: [b, s, s, ss, ss, a, sa, sa, sa, aa, aa, tr],
		amount: 0
	},
	{
		type: 'boost',
		sides: 6,
		scenario: [b, b, aa, a, sa, s],
		amount: 0
	},
	{
		type: 'difficulty',
		sides: 8,
		scenario: [b, f, ff, t, t, t, tt, ft],
		amount: 0
	},
	{
		type: 'challenge',
		sides: 12,
		scenario: [b, f, f, ff, ff, t, t, ft, ft, tt, tt, d],
		amount: 0
	},
	{
		type: 'setback',
		sides: 6,
		scenario: [b, b, f, f, t, t],
		amount: 0
	}
]

const randomizeDice = (max) => {
	return 1 + Math.floor(Math.random() * max)
}

export const rollDice = (state) => {
	updateDiceAmount(Object.entries(state))
	dice.map(die => {
		const {amount, sides} = die
		if ({amount}) {
		 const rollAmount =	Array.from(Array(amount))
		const rolls = rollAmount.map(() => {
			return randomizeDice(sides)
		 })
		 console.log(rolls)
		 }
	})
}

const updateDiceAmount = (dice) => {
	dice.map(die => {
		return getStats(die)
	})
}

const getStats = (gameDie) => {
	const diceMap = dice.map(die => {
		const type = die.type
		if (gameDie[0] === type) {
			const currentDie = dice[dice.indexOf(die)]
			currentDie.amount = gameDie[1]
		}
		return die
	})
	return diceMap
}