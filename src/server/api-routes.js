/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by Lvannebenne@TokyoHotel (BeCode Liège - Hamilton 2.12)
 * started at 10/09/2019
 */

const router = require("express").Router();

import banks from "./controllers/bank-controller";
import terminals from "./controllers/terminal-controller";

router.get("/", (req, res) => {
    res.json({
        status: "API is working",
        message: "Welcome to TrouvKach",
    });
});

router.get("/banks", banks.findAll);
router.get("/bank/:id", banks.findByID);

router.get("/terminals", terminals.findAll);
router.get("/term/:nb", terminals.findQt);
router.get("/getterm/:id", terminals.getTerm);

router.get("/terminal/:lat/:lng", terminals.geoOrd);
router.post("/empty/:id", terminals.updateEmpty);
router.post("/delete/:id", terminals.updateDelete);
router.get("/reset-delete-string/:id", terminals.test);

module.exports = router;
