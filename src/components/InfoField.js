export const InfoField = ({ heading, info }) => {
  return (
    <div className='info-field'>
      <dt className="info-heading">{heading}</dt>
      <dd className="info-value">{info}</dd>
    </div>
  )
}