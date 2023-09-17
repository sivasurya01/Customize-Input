export const Input = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  required,
  defaultValue,
  disabled,
  className,
  id,
  htmlFor,
}) => (
  <div className="form-group">
    {label && <label htmlFor={htmlFor}>{label}</label>}
    <input
      type={type}
      value={value}
      htmlFor={htmlFor}
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      id={id}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  </div>
);
