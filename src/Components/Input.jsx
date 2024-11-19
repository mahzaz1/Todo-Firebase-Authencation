import React from "react";

function Input({ value, setValue, handlefunction, placeholder, button }) {
  return (
    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handlefunction}>{button}</button>{" "}
    </div>
  );
}

export default Input;
