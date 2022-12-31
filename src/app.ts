import "dotenv/config";
import express from "express";
import cors from "cors";
//importamos las ruta
import {router} from "./routes/items";
//MONGO_importamos las configuracon del mongo 
import db from "./config/mongo"
const PORT = process.env.PORT;
const app= express();
//para usar las rutas 
app.use(router);
app.use(cors());
//CONTROLLERS
app.use(express.json());
//MONGO_ejecutamos la conexion
db().then(()=>{console.log("conexion ready")})
app.listen(PORT,()=>console.log(`listen in port ${PORT}`))
