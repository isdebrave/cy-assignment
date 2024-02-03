import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import home from "./routes/home";
import auth from "./routes/auth";
import remove from "./routes/remove";

const app = express();
dotenv.config();

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/videos", express.static(path.join(process.cwd(), "videos")));
app.use("/images", express.static(path.join(process.cwd(), "images")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/", home);
app.use("/auth", auth);
app.use("/remove", remove);

app.listen(8080, () => console.log("✅ Listening on port 8080"));
