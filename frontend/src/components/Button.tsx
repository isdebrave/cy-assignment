interface Props {
  disabled?: boolean;
  onClick: () => void;
  label: string;
  fit?: boolean;
  red?: boolean;
}

const Button: React.FC<Props> = ({
  disabled,
  onClick,
  label,
  fit = false,
  red = false,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${fit ? "w-fit" : "w-full"}
        h-fit
        text-white 
        p-2 
        rounded-lg
        ${disabled ? "bg-gray-300" : red ? "bg-rose-500" : "bg-sky-500 "}
        ${!disabled && "hover:brightness-95"} 
        font-semibold
      `}
    >
      {label}
    </button>
  );
};

export default Button;
