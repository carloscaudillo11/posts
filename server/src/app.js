import express from "express";
import morgan from "morgan";
import postsRouter from "./routes/posts.routes.js";
import fileUpload from "express-fileupload";
import cors from "cors";
import {FRONTEND_URL} from './config.js'

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);

app.use(morgan("dev"));

app.use(express.json());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);

app.use(postsRouter);

export default app;
