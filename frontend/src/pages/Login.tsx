import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContainer from "../components/AuthContainer";
import AuthHeading from "../components/AuthHeading";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (email.trim() === "") {
      return setEmailError(true);
    }
    if (password.trim() === "") {
      return setPasswordError(true);
    }

    axios
      .post("/auth/login", { email, password })
      .then(() => navigate("/"))
      .catch((error) => alert(error.response.data));
  };

  return (
    <AuthContainer>
      <AuthHeading title="통합로그인" />
      <div className="flex flex-col">
        <Input
          placeholder="이메일"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          value={email}
          isError={emailError}
          errorMessage="이메일을 적어주세요."
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
      <Button onClick={onSubmit} label="로그인" />
    </AuthContainer>
  );
};

export default Login;
