import express, { Application } from "express";

const example = { name: "eholo", age: 20 };

const app: Application = express();

app.get("/example", (req, res) => {
	res.json(example);
});

app.listen(5000, () => console.log("server is running"));
