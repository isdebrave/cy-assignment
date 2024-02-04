import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

import userDatabase from "./database/user";
import refreshTokenDatabase from "./database/refreshToken";

export const isAccessTokenValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.accessToken;

    // accessToken 검증
    jwt.verify(token, process.env.ACCESS_SECRET!);

    next();
  } catch (error) {
    // accessToken 만료
    if (error instanceof TokenExpiredError) {
      try {
        const token = refreshTokenDatabase.token;

        // refreshToken 검증
        const { id } = jwt.verify(token, process.env.REFRESH_SECRET!) as {
          id: string;
        };

        // refreshToken 유효
        const user = userDatabase.find((item) => item.id === id)!;

        // accessToken 갱신 & 쿠키에 새로 전달
        const accessToken = jwt.sign(
          { id: user.id, name: user.name, email: user.email },
          process.env.ACCESS_SECRET!,
          { expiresIn: "1h" }
        );
        res.cookie("accessToken", accessToken, {
          httpOnly: true,
          secure: false,
        });

        next();
      } catch (error) {
        // refreshToken 만료
        console.log(error);
        res.status(401).json("다시 로그인 해주세요.");
      }
    } else {
      console.log(error);
      res.status(500).json(error);
    }
  }
};
