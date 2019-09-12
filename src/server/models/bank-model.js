import mongoose from "mongoose";
import {ObjectId} from "mongodb";

const bankSchema = new mongoose.Schema({
    _id: ObjectId,
    country: String,
    color: String,
    name: String,
    icon: String,
    url: String,
    created_at: String,
    updated_at: String,
    deleted_at: String,
});

module.exports = mongoose.model("bank", bankSchema);
