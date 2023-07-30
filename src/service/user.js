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
exports.getOneUser = exports.getAllUsers = exports.insertUser = void 0;
//importamos el model para usar el objeto 
const user_model_1 = __importDefault(require("../models/user.model"));
const insertUser = (item) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("llega el payload:", item);
    const responseItem = yield user_model_1.default.create(item);
    return responseItem;
});
exports.insertUser = insertUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    // const responseItem = { hola: "hola" };
    // return responseItem;
    const responseItem = yield user_model_1.default.find({});
    //return "NADA";
    console.log(responseItem);
    return responseItem;
});
exports.getAllUsers = getAllUsers;
const getOneUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield user_model_1.default.find({ "id": id });
    return responseItem;
});
exports.getOneUser = getOneUser;