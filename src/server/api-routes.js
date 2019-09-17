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
router.get("/terminals", terminals.findAll);
router.get("/term/:nb", terminals.findQt);

router.get("/terminal/:lat/:lng", terminals.geoOrd);
router.get("/update", terminals.updateAll);

module.exports = router;
