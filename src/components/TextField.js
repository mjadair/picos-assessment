import "./TextField.css";

import React, { useCallback } from "react";

const TextField = ({
  label,
  value,
  name,
  onChange,
  placeholder,
  disabled,
  ...props
}) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e, e.target.value);
    },
    [onChange]
  );

  return (
    <div className="TextField">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        props= {props.type ? props.type : 'text' }
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextField;
