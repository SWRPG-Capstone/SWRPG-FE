export const Die = ({ die, amount }) => {
	return (
		<article className='die-field'>
 			<h4 className='die-name'>{die}</h4>
			<aside className='dice-scale'>
				<div className='scale down'/>
				<h4 className='dice'>{amount}</h4>
				<div className='scale up'/>
			</aside>
		</article>
	)
}