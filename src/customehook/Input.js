import React from "react";

function Input({ register, name, placeholder, type, error, rule, className }) {
  return (
    <div>
      <input
        {...register(name, rule)}
        className={className}
        type={type}
        placeholder={placeholder}
      ></input>
      <p className="error-message">{error}</p>
    </div>
  );
}

export default Input;
