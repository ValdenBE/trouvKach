import bank from "../models/bank-model";

exports.findAll = (req, res) => {
    bank.find()
        .then(banks => {
            res.json(banks);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving banks.",
            });
        });
};

exports.findByID = (req, res) => {
    bank.find({_id: req.params.id})
        .then(banks => {
            res.json(banks);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving banks.",
            });
        });
};
