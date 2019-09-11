/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by Lvannebenne@TokyoHotel (BeCode Liège - Hamilton 2.12)
 * started at 10/09/2019
 */

const router = require("express").Router();

router.get("/", (req, res) => {
    res.json({
        status: "API is working",
        message: "Welcome to TrouvKach",
    });
});

module.exports = router;
