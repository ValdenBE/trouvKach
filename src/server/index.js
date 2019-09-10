/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://dev:dev@mongo:27017";
const dbName = "trouvkash";
const client = new MongoClient(url);

const {APP_PORT} = process.env;

const app = express();
const router = require("express").Router();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

router.get("/", (req, res) => {
    res.json({
        status: "API is working NOWWWW",
        message: "Welcome to TrouvKach",
    });
});

app.get("/bank", (req, res) => {
    client.connect(err => {
        assert.equal(null, err);
        if (err == null) {
            console.log("connected Sucessfully <3");
            const db = client.db(dbName);
            const collection = db.collection("banks");
            collection.find({}).toArray((err2, items) => {
                if (err2 != null) {
                    console.error(err2);
                    client.close();
                } else {
                    const rep = {data: items};
                    res.send(rep);
                    client.close();
                }
            });
        } else {
            console.error(err);
        }
    });
});

//app.use("/api", router);
