import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const terminalSchema = new mongoose.Schema({
    _id: ObjectId,
    bank: ObjectId,
    latitude: Number,
    longitude: Number,
    address: String,
    created_at: String,
    updated_at: String,
    deleted_at: String,
    position: {
        type: {type: String},
        coordinates: [Number],
    },
    empty: Boolean,
});

module.exports = mongoose.model("terminal", terminalSchema);
