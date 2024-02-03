interface Props {
  children: React.ReactNode;
}

const AuthContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        container 
        mx-auto 
        h-full 
        flex 
        flex-col 
        justify-center 
        items-center
      "
    >
      <div
        className="
          w-full 
          max-w-80 
          p-4 
          rounded-xl 
          shadow-lg
        "
      >
        {children}
      </div>
    </div>
  );
};

export default AuthContainer;
