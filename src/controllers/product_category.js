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
exports.deleteItem = exports.postItem = exports.updateItem = exports.getProductos = exports.getProductById = void 0;
const productCategory_1 = require("../service/productCategory");
//leemos el controlador 
const getProductos = ({ body }, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, productCategory_1.getAllProductos)();
        resp.send(response);
    }
    catch (error) {
        // handleHtttp( resp,"ERROR_GET_ALL_Productos", error);
    }
});
exports.getProductos = getProductos;
const getProductById = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, productCategory_1.getOneProduct)(req.params.id);
        ///resp.send("GETTING_DATA_ONE");
        resp.send(response);
    }
    catch (error) {
        //handleHtttp(resp, "ERROR_GET_ONE_ITEMS", error);
    }
});
exports.getProductById = getProductById;
const postItem = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const respuesta = yield (0, productCategory_1.inserProductCategory)(req.body);
        //resp.send("la respuesta: "+respuesta);
        console.log("se creo un post");
    }
    catch (error) {
        //handleHtttp(resp, "ERROR_POST_ITEMS", error);
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
