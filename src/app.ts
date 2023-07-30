import "dotenv/config";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//:::::::::::::::RUTAS ::::::::::::::::::::::::::
import { router } from "./routes/items";
import { router_users } from "./routes/users";

//:::::::::::::::MONGO ::::::::::::::::::::::::::
import db from "./config/mongo"
const PORT = process.env.PORT;
const app= express();
//:::::::::::::::RUTAS::::::::::::::::::::::::::
app.use(router);
app.use(router_users);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//:::::::::::::::CONTROLLERS ::::::::::::::::::::::::::
app.use(express.json());
//MONGO_ejecutamos la conexion
db().then(()=>{console.log("conexion ready")})
app.listen(PORT,()=>console.log(`listen in port ${PORT}`))
