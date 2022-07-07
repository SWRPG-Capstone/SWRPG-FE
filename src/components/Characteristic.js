export const Characteristic = ({ characteristic, score }) => {
  return (
    <div className='bubble-wrapper'>
      <dt className="characteristic-title">{characteristic}</dt>
      <dd className="score-bubble">{score}</dd>
    </div>
  )
}