import { Router } from "express";
import verifyUser from "../verifyUser";

const router = Router();

router.get("/test", verifyUser, (req, res, next) => {
	res.send("private message");
});

export default router;
