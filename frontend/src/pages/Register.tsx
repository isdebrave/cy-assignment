import { useState } from "react";

import AuthContainer from "../components/AuthContainer";
import AuthHeading from "../components/AuthHeading";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = () => {
    if (email.trim() === "") {
      setEmailError(true);
    }
    if (phone.trim() === "") {
      setPhoneError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }
  };

  return (
    <AuthContainer>
      <AuthHeading title="회원가입" isLogin={false} />
      <div className="flex flex-col">
        <Input
          placeholder="이메일"
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          isError={emailError}
          errorMessage="이메일을 적어주세요."
        />
        <Input
          placeholder="휴대폰 번호(010-123-4567)"
          onChange={(e) => {
            setPhone(e.target.value);
            setPhoneError(false);
          }}
          isError={phoneError}
          errorMessage="휴대폰 번호를 적어주세요."
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
      <Button onClick={onSubmit} label="가입하기" />
    </AuthContainer>
  );
};

export default Register;
