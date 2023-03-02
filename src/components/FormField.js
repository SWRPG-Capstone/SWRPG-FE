export const FormField = ({ name, type, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="char-heading" htmlFor={name}>
        {name}
        <input className="char-value" type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
};
