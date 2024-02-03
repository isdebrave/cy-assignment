import { Link } from "react-router-dom";

interface Props {
  title: string;
  isLogin?: boolean;
}

const AuthHeading: React.FC<Props> = ({ title, isLogin = true }) => {
  return (
    <div className="relative">
      <div className="text-gray-500">CYCLOID</div>
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <Link
        to={isLogin ? "/auth/register" : "/auth/login"}
        className="hover:opacity-80 absolute top-0 right-0 text-gray-500 font-semibold"
      >
        {isLogin ? "회원가입" : "로그인"}
      </Link>
    </div>
  );
};

export default AuthHeading;
