import express from "express";
import bodyParser from "body-parser";
import route1 from "./movie/route.js";
import route2 from "./tvShow/route.js";
import Connection from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/movie", route1);
app.use("/tvShow", route2);


Connection();
app.listen(process.env.PORT, () => console.log(`your app is running on port ${process.env.PORT}`));
