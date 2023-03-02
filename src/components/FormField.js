export const FormField = () => {
  return (
    <div className="input-container">
      <label className="char-heading" htmlFor="name">
        name
        <input
          className="char-value"
          type="text"
          name="name"
          value={formState.name}
          onChange={(e) => onChange(e, 'handle text input', 'details')}
          autoFocus
        />
      </label>
    </div>
  );
};
