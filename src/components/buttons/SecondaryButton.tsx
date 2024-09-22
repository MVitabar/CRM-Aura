import React, { ButtonHTMLAttributes } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={`w-full px-4 py-2 bg-white text-black border border-black hover:border-purple-600 hover:text-purple-600 rounded-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default SecondaryButton;
