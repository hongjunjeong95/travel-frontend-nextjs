import React, { HTMLInputTypeAttribute } from "react";

const Input = ({ labelText, htmlFor, placeholder, type }: Prop) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={htmlFor} className="text-sm mb-2">
        {labelText}
      </label>
      <input
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        className="border border-gray-200 border-solid rounded-md px-2 py-3 placeholder:text-sm placeholder:font-light"
      />
    </div>
  );
};

export default Input;

type Prop = {
  labelText: string;
  type: HTMLInputTypeAttribute;
  htmlFor: string;
  placeholder?: string;
};
