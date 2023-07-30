"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
//:::::::::::::::RUTAS ::::::::::::::::::::::::::
const items_1 = require("./routes/items");
const users_1 = require("./routes/users");
//:::::::::::::::MONGO ::::::::::::::::::::::::::
const mongo_1 = __importDefault(require("./config/mongo"));
const PORT = process.env.PORT;
const app = (0, express_1.default)();
//:::::::::::::::RUTAS::::::::::::::::::::::::::
app.use(items_1.router);
app.use(users_1.router_users);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
//:::::::::::::::CONTROLLERS ::::::::::::::::::::::::::
app.use(express_1.default.json());
//MONGO_ejecutamos la conexion
(0, mongo_1.default)().then(() => { console.log("conexion ready"); });
app.listen(PORT, () => console.log(`listen in port ${PORT}`));
