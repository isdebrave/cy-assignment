import { useState } from "react";

import AuthContainer from "../components/AuthContainer";
import AuthHeading from "../components/AuthHeading";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
  const [id, setId] = useState("");
  const [idError, setIdError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = () => {
    if (id.trim() === "") {
      setIdError(true);
    }
    if (phone.trim() === "") {
      setPhoneError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }

    console.log(id);
    console.log(phone);
    console.log(password);
  };

  return (
    <AuthContainer>
      <AuthHeading text="회원가입" />
      <div className="flex flex-col">
        <Input
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
            setIdError(false);
          }}
          isError={idError}
          errorMessage="아이디를 적어주세요."
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
