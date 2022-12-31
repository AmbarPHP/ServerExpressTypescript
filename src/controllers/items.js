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
exports.deleteItem = exports.postItem = exports.updateItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const items_1 = require("../service/items");
//leemos el controlador 
const getItems = ({ body }, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, items_1.getAllItems)();
        resp.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHtttp)(resp, "ERROR_GET_ALL_ITEMS", error);
    }
});
exports.getItems = getItems;
const getItem = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, items_1.getOneItem)();
        resp.send(response);
        //resp.send("GETTING_DATA_ONE");
    }
    catch (error) {
        (0, error_handle_1.handleHtttp)(resp, "ERROR_GET_ONE_ITEMS", error);
    }
});
exports.getItem = getItem;
const postItem = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield (0, items_1.inserItem)(req.body);
        resp.send("la respuesta: " + respuesta);
        console.log("se creo un post");
    }
    catch (error) {
        (0, error_handle_1.handleHtttp)(resp, "ERROR_POST_ITEMS", error);
    }
});
exports.postItem = postItem;
const updateItem = (req, resp) => {
    try {
        resp.send("UPDATE_DATA");
    }
    catch (error) {
        resp.status(500).send('Something broke!');
    }
};
exports.updateItem = updateItem;
const deleteItem = (req, resp) => {
    try {
        resp.send("DATA_DELETE");
    }
    catch (error) {
        resp.status(500).send('something broke');
    }
};
exports.deleteItem = deleteItem;
