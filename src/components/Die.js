import { useState } from "react"

export const Die = ({ die }) => {
	const [count, setCount] = useState(0)

	const handleClick = (e, sign) => {
		e.preventDefault()
		sign === 'plus' ? setCount(count + 1) : setCount(count - 1)
	}

	return (
		<article className='die-field'>
 			<h4 className='die-name'>{die}</h4>
			<aside className='dice-scale'>
			<div className='scale down'>
					<p className='sign minus' onClick={(e) => handleClick(e, 'minus')}>-</p>
				</div>
				<h4 className='dice-amount'>{count}</h4>
				<div className='scale'>
					<p className='sign plus' onClick={(e) => handleClick(e, 'plus')}>+</p>
				</div>
			</aside>
		</article>
	)
}