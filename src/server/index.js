/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
import apiRoutes from "./api-routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use("/api", apiRoutes);

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(bodyParser.json());

mongoose.connect("mongodb://dev:dev@localhost/trouvkash", {
    useNewUrlParser: true,
});

const db = mongoose.connection;

if (!db) {
    console.log("Error connecting db");
} else {
    console.log("Db connected successfully");
}

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
