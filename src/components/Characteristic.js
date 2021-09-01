export const Characteristic = ({ characteristic, score }) => {
  return (
    <article>
      <h3 className="score-bubble">{score}</h3>
      <p className="characteristic-title">{characteristic}</p>
    </article>
  )
}