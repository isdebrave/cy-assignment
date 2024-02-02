interface Props {
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  isError: boolean;
  errorMessage: string;
}

const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  onChange,
  value,
  isError,
  errorMessage,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`
          p-2 
          text-lg 
          outline-none 
          rounded-lg 
          border 
          ${isError && "border-rose-500"}
          focus:border-sky-500
        `}
      />
      {isError && <span className="text-rose-500">{errorMessage}</span>}
    </div>
  );
};

export default Input;
