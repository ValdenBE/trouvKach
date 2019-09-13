import terminal from "../models/terminal-model";

exports.findAll = (req, res) => {
    terminal
        .find()
        .then(terminals => {
            res.json(terminals);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving terminals.",
            });
        });
};

exports.findQt = (req, res) => {
    terminal
        .find()
        .limit(parseInt(req.params.nb))
        .then(terminals => {
            res.json(terminals);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving terminals.",
            });
        });
};

exports.geoLocTerm = (req, res) => {
    const radius = 0.009;
    const minLat = req.params.lat - radius * req.params.rad;
    const minLng = req.params.lng - radius * req.params.rad;
    const maxLat = parseFloat(req.params.lat) + radius * req.params.rad;
    const maxLng = parseFloat(req.params.lng) + radius * req.params.rad;
    terminal
        .find()
        .where("position")
        .within({
            box: [[minLat, minLng], [maxLat, maxLng]],
        })
        .limit(10)
        .then(terminals => {
            res.json(terminals);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving terminals.",
            });
        });
};

// Update lat. and long. to 1 position property
exports.updateAll = async () => {
    const test = await terminal.find();
    test.forEach(document => {
        document
            .update({
                $set: {
                    position: [document.latitude, document.longitude],
                },
            })
            .exec(() => {
                console.log("update OK");
            });
    });
};
