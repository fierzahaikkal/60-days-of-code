import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import postsRoute from "./routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(postsRoute);

app.listen(process.env.PORT, () => console.log("server running..."));
