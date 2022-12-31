import { Request, Response } from "express"
import { handleHtttp } from "../utils/error.handle";
import {inserItem, getAllItems, getOneItem} from "../service/items";


//leemos el controlador 
const getItems =async ({body}:Request, resp:Response)=>{
    try{
        const response= await getAllItems();
        resp.send(response);
    }
    catch (error) {
        handleHtttp(resp, "ERROR_GET_ALL_ITEMS", error);
    }
}
const getItem = async (req:Request, resp:Response)=>{
    try {
        const response= await getOneItem(req.params._id);
        resp.send(response);
        //resp.send("GETTING_DATA_ONE");
    } catch (error) {
        handleHtttp(resp, "ERROR_GET_ONE_ITEMS", error);
    }
}

const postItem = async (req:Request, resp:Response)=>{
    try {
        const respuesta= await inserItem(req.body);
        resp.send("la respuesta: "+respuesta);
        console.log("se creo un post");
    } catch (error) {
        handleHtttp(resp, "ERROR_POST_ITEMS", error);
    }
}

const updateItem=(req:Request, resp: Response)=>{
    try {
        resp.send("UPDATE_DATA");
    } catch (error) {
        resp.status(500).send('Something broke!')
    }
}
const deleteItem =(req:Request, resp:Response)=>{
    try {
        resp.send("DATA_DELETE")
    } catch (error) {
        resp.status(500).send('something broke')
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem};