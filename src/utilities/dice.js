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
		scenario: [dP, dP, dP, dP, dP, dP, dPdP, lP, lP, lPlP, lPlP, lPlP]
	},
	{
		type: 'ability',
		sides: 8,
		scenario: [b, s, s, ss, a, a, sa, aa]
	},
	{
		type: 'profeciency',
		sides: 12,
		scenario: [b, s, s, ss, ss, a, sa, sa, sa, aa, aa, tr]
	},
	{
		type: 'boost',
		sides: 6,
		scenario: [b, b, aa, a, sa, s]
	},
	{
		type: 'difficulty',
		sides: 8,
		scenario: [b, f, ff, t, t, t, tt, ft]
	},
	{
		type: 'challenge',
		sides: 12,
		scenario: [b, f, f, ff, ff, t, t, ft, ft, tt, tt, d]
	},
	{
		type: 'setback',
		sides: 6,
		scenario: [b, b, f, f, t, t]
	}
]

export const randomizeDice = (max) => {
	return 1 + Math.floor(Math.random() * max)
}