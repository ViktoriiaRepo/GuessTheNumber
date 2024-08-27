import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  className,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`bg-emerald-500 text-white py-2 px-4  hover:bg-emerald-600 disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

export default Button;
