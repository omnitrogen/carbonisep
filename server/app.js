import express from "express";
const app = express();
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/index.js";

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

export default app;
