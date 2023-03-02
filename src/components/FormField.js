export const FormField = ({ name, type, value, onChange, autoFocus }) => {
  return (
    <div className="input-container">
      <label className="char-heading" htmlFor={name}>
        {name}
        <input className="char-value" type={type} name={name} value={value} onChange={onChange} autoFocus={autoFocus} />
      </label>
    </div>
  );
};
