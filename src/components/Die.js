import react from "react"

export const Die = ({ die, amount }) => {
	return (
		<article className='die-field'>
 			<h4 className='die-name'>Profeciency</h4>
			<aside className='dice-scale'>
			<div className='scale down'>
					<p className='sign minus'>-</p>
				</div>
				<h4 className='dice-amount'>3</h4>
				<div className='scale'>
					<p className='sign plus'>+</p>
				</div>
			</aside>
		</article>
	)
}