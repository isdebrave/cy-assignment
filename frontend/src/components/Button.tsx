interface Props {
  onClick: () => void;
  label: string;
}

const Button: React.FC<Props> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-sky-500 text-white py-2 rounded-lg hover:brightness-95 font-semibold"
    >
      {label}
    </button>
  );
};

export default Button;
