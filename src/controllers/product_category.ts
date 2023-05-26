import { Request, Response } from "express"
import { handleHtttp } from "../utils/error.handle";
import {inserProductCategory, getAllProductos, getOneProduct} from "../service/productCategory";


//leemos el controlador 
const getProductos =async ({body}:Request, resp:Response)=>{
    try{
        const response= await getAllProductos();
        resp.send(response);
    }
    catch (error) {
       // handleHtttp( resp,"ERROR_GET_ALL_Productos", error);
    }
}
const getProductById = async (req:Request, resp:Response)=>{
    try {
        const response= await getOneProduct(req.params.id);
        ///resp.send("GETTING_DATA_ONE");
         resp.send(response);
       
    } catch (error) {
        //handleHtttp(resp, "ERROR_GET_ONE_ITEMS", error);
    }
}

const postItem = async (req:Request, resp:Response)=>{
    try {
        const respuesta= await inserProductCategory(req.body);
        //resp.send("la respuesta: "+respuesta);
        console.log("se creo un post");
    } catch (error) {
        //handleHtttp(resp, "ERROR_POST_ITEMS", error);
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

export {getProductById, getProductos, updateItem, postItem, deleteItem};