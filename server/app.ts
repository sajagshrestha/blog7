import express, { Application } from "express";
import authRouter from "./src/routes/auth";
import dotenv from "dotenv";
import mongoose from "mongoose";

//config .env
dotenv.config();
const URI = process.env.DB_URI || "";
const PORT = process.env.PORT || 5000;

//intialize express server
const app: Application = express();

//connect to database
mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("connected to db"))
	.catch((err) => console.log(err));

//json parser
app.use(express.json());

//midllewares
app.use("/auth", authRouter);

//start server at PORT
app.listen(PORT, () => console.log("server is running"));
