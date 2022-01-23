// copy/paste
import express from "express";

const router = express.Router();

router.route("/").get((req, res) => res.send("hello world")); //just to test out program.
export default router;
