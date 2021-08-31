export const InfoField = ({ heading, info }) => {
  return (
    <article>
      <h2 className="info-heading">{heading}</h2>
      <p className="info-value">{info}</p>
    </article>
  )
}