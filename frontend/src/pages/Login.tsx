import { useState } from "react";
import { Link } from "react-router-dom";

import AuthContainer from "../components/AuthContainer";
import AuthHeading from "../components/AuthHeading";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = () => {
    if (id.trim() === "") {
      setIdError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }

    console.log(id);
    console.log(password);
  };

  return (
    <AuthContainer>
      <AuthHeading text="통합로그인" />
      <div className="flex flex-col">
        <Input
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
            setIdError(false);
          }}
          value={id}
          isError={idError}
          errorMessage="아이디를 적어주세요."
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          isError={passwordError}
          errorMessage="비밀번호를 적어주세요."
        />
      </div>
      <div className="flex justify-between mb-4 text-gray-500 font-semibold">
        <div className="space-x-1">
          <input id="id" type="checkbox" />
          <label htmlFor="id">아이디 저장</label>
        </div>
        <Link to="/auth/register" className="hover:opacity-80">
          회원가입
        </Link>
      </div>
      <Button onClick={onSubmit} label="로그인" />
    </AuthContainer>
  );
};

export default Login;
