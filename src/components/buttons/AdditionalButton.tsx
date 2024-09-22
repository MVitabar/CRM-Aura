interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function AdditionalButton({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`
        flex px-4 py-2 font-medium transition-colors duration-200
        ${
          disabled
            ? "text-gray-400 cursor-not-allowed"
            : "text-black hover:text-purple-600 active:text-purple-800"
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
