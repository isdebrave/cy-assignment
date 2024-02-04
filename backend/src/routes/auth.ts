import express from "express";

import { login, logout } from "../controllers/auth";

const auth = express.Router();

auth.post("/login", login);
auth.get("/logout", logout);
auth.post("/register"); // -> 이거 아직 안함

export default auth;
