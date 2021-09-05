export const Characteristic = ({ characteristic, score }) => {
  return (
    <article className='bubble-wrapper'>
      <h3 className="score-bubble">{score}</h3>
      <p className="characteristic-title">{characteristic}</p>
    </article>
  )
}