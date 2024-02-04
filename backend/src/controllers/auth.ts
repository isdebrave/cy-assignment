import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import userDatabase from "../database/user";
import refreshTokenDatabase from "../database/refreshToken";

export const login = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = userDatabase.find((item) => item.email === email);

  if (!user) {
    return res.status(401).json("이메일 계정이 없습니다.");
  }

  if (user.password !== password) {
    return res.status(401).json("비밀번호가 틀렸습니다.");
  }

  try {
    // accessToken 발급 & 쿠키에 전달
    const accessToken = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.ACCESS_SECRET!,
      { expiresIn: "1h" }
    );
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
    });

    // refreshToken 발급 & DB에 저장
    const refreshToken = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.REFRESH_SECRET!,
      { expiresIn: "24h" }
    );
    refreshTokenDatabase.token = refreshToken;

    res.status(200).json();
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const logout = (req: Request, res: Response) => {
  res.cookie("accessToken", "");
  res.redirect("http://localhost:3000/auth/login");
};
