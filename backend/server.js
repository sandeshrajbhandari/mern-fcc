import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express(); //this makes the web server

app.use(cors());
app.use(express.json()); //body parser or server can accept json in body of request
//initial routes
app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

//now export this
export default app; //import in file that accessses the database
