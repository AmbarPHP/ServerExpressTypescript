"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: Number },
    name: { type: String, require: true },
    username: { type: String },
    email: { type: String },
    address: [{
            street: { type: String },
            suite: { type: String },
            city: { type: String },
            zipcode: { type: String },
            geo: [{
                    lat: { type: String },
                    lng: { type: String },
                }],
        }]
});
//dos parametros <nombre del schema en la base de datos, definicion del schema>
const UserModel = (0, mongoose_1.model)("users", userSchema);
exports.default = UserModel;
