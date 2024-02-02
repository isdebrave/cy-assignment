interface Props {
  onClick: () => void;
  label: string;
  fit?: boolean;
  red?: boolean;
}

const Button: React.FC<Props> = ({
  onClick,
  label,
  fit = false,
  red = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${fit ? "w-fit" : "w-full"}
        h-fit
        ${red ? "bg-rose-500" : "bg-sky-500 "}
        text-white 
        p-2 
        rounded-lg 
        hover:brightness-95 
        font-semibold
      `}
    >
      {label}
    </button>
  );
};

export default Button;
