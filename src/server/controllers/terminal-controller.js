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

exports.getTerm = (req, res) => {
    terminal.find({_id: req.params.id}).then(atm => res.json(atm));
};

exports.geoOrd = (req, res) => {
    const long = parseFloat(req.params.lng);
    const lat = parseFloat(req.params.lat);
    const radius = parseInt(req.params.radius);
    terminal.aggregate(
        [
            {
                $geoNear: {
                    near: {
                        type: "Point",
                        coordinates: [long, lat],
                    },
                    distanceField: "dist.calculated",
                    maxDistance: radius,
                    spherical: true,
                },
            },
        ],
        (err, data) => {
            if (err) {
                throw err.message;
            }
            return res.json(data);
        },
    );
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
        .limit(15)
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

exports.updateEmpty = req => {
    terminal
        .findOne({_id: req.params.id})
        .then(element => {
            terminal
                .updateOne({_id: req.params.id}, {empty: !element.empty})
                .exec(() => {
                    console.log("Term updated empty");
                });
        })
        .catch(err => console.error(err));
};

exports.updateDelete = req => {
    const deleted = new Date();
    terminal
        .updateOne({_id: req.params.id}, {deleted_at: deleted.toISOString()})
        .exec(() => {
            console.log("Term deleted empty");
        });
};

exports.test = req => {
    terminal.updateOne({_id: req.params.id}, {deleted_at: null}).exec(() => {
        console.log("Term modified");
    });
};

// Update lat. and long. to 1 position property
exports.updateAll = async () => {
    const test = await terminal.find();
    test.forEach(document => {
        document
            .update({
                $set: {
                    empty: false,
                },
            })
            .exec(() => {
                console.log("update OK");
            });
    });
};
