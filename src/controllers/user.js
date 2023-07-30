"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.postUser = exports.updateUser = exports.getUsers = exports.getUserById = void 0;
const express_1 = require("express");
const user_1 = require("../service/user");
//leemos el controlador 
const getUsers = ({ body }, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, user_1.getAllUsers)();
        //resp.send("GETTING_DATA_users");
        resp.send(response);
    }
    catch (error) {
        express_1.response.status(500);
        express_1.response.send({ error: error });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, user_1.getOneUser)(parseInt(req.params.id));
        //resp.send("GETTING_DATA_ONE");
        resp.send(response);
    }
    catch (error) {
        //handleHtttp(resp, "ERROR_GET_ONE_ITEMS", error);
    }
});
exports.getUserById = getUserById;
const postUser = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body; // Obtenemos los datos enviados en el cuerpo de la solicitud
        resp.json({ message: 'Datos recibidos correctamente', data });
        console.log("console body ", data);
        resp.send("el send body: " + data);
        // const respuesta= await insertUser(req.body);
    }
    catch (error) {
        console.log(error);
        //handleHtttp(resp, "ERROR_POST_ITEMS", error);
    }
});
exports.postUser = postUser;
const updateUser = (req, resp) => {
    try {
        resp.send("UPDATE_DATA");
    }
    catch (error) {
        resp.status(500).send('Something broke!');
    }
};
exports.updateUser = updateUser;
const deleteItem = (req, resp) => {
    try {
        resp.send("DATA_DELETE");
    }
    catch (error) {
        resp.status(500).send('something broke');
    }
};
exports.deleteItem = deleteItem;
