/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

const {APP_PORT} = process.env;

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

app.get("/api/bank", (req, res) => {
    res.json({
        0: {
            _id: "53937660e0b8c05979c6ea55",
            country: "BE",
            color: "4a961d",
            name: "Argenta",
            icon: "argenta.png",
            url: "http://www.argenta.be",
            created_at: "2013-06-06 20:40:38",
            updated_at: "2013-06-06 20:40:38",
            deleted_at: null,
        },
        1: {
            _id: "53937660e0b8c05979c6ea56",
            country: "BE",
            color: "0b2c81",
            name: "AXA",
            icon: "axa.png",
            url: "http://www.axa.be",
            created_at: "2013-06-06 20:40:38",
            updated_at: "2013-06-06 20:40:38",
            deleted_at: null,
        },
    });
});

app.get("/api/terminal", (req, res) => {
    res.json({
        0: {
            _id: "5393803ce0b8c05979c6ead6",
            bank: "53937660e0b8c05979c6ea55",
            latitude: 50.6802,
            longitude: 5.548,
            address: "Rue François-Lefèbvre 79, 4000 Liege",
            created_at: "2013-06-10 18:43:44",
            updated_at: "2013-06-10 18:43:44",
            deleted_at: null,
        },
        1: {
            _id: "5393803ce0b8c05979c6ead7",
            bank: "53937660e0b8c05979c6ea55",
            latitude: 50.6233,
            longitude: 5.5712,
            address: "Rue Auguste Buisseret 1, 4000 Liege",
            created_at: "2013-06-10 18:43:44",
            updated_at: "2013-06-10 18:43:44",
            deleted_at: null,
        },
    });
});

/*app.get("/bank", (req, res) => {
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
});*/

//app.use("/api", router);
