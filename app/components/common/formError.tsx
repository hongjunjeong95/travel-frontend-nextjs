import React from "react";

interface IFormErrorProps {
  errorMessage: string;
}

const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => {
  return (
    <span role="alert" className="font-medium text-red-500 mb-6">
      {errorMessage}
    </span>
  );
};

export default FormError;
