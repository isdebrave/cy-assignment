interface Props {
  text: string;
}

const AuthHeading: React.FC<Props> = ({ text }) => {
  return (
    <>
      <div className="text-gray-500">CYCLOID</div>
      <h1 className="text-3xl font-bold mb-4">{text}</h1>
    </>
  );
};

export default AuthHeading;
