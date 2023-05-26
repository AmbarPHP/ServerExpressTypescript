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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneProduct = exports.getAllProductos = exports.inserProductCategory = void 0;
//importamos el model para usar el objeto 
const productCategory_model_1 = __importDefault(require("../models/productCategory.model"));
const inserProductCategory = (item) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(item);
    const responseItem = yield productCategory_model_1.default.create(item);
    return responseItem;
});
exports.inserProductCategory = inserProductCategory;
const getAllProductos = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield productCategory_model_1.default.find({});
    //console.log("Busco la razon por la cual no me regresa datos",responseItem);
    return responseItem;
});
exports.getAllProductos = getAllProductos;
const getOneProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield productCategory_model_1.default.find({ "subcategories.name": id });
    return responseItem;
});
exports.getOneProduct = getOneProduct;
