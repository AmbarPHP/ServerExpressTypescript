import { NextFunction, Request, Response} from "express"
import { handleHtttp } from "../utils/error.handle";
import {insertUser, getAllUsers, getOneUser} from "../service/user";


//leemos el controlador 
const getUsers =async ({body}:Request, resp:Response)=>{
    try {
       
        const response = await getAllUsers();
        //resp.send("GETTING_DATA_users");
        resp.send(response);
    }
    catch (error) {
        resp.status(500);
    resp.send({error:error}); 
    }
}


const getUserById = async (req:Request, resp:Response)=>{
    try {
        const response= await getOneUser(parseInt(req.params.id));
        //resp.send("GETTING_DATA_ONE");
         resp.send(response);
       
    } catch (error) {
        //handleHtttp(resp, "ERROR_GET_ONE_ITEMS", error);
    }
}

const postUser1 = async (req:Request, resp:Response)=>{
    try {

        const data = req.body; // Obtenemos los datos enviados en el cuerpo de la solicitud

        resp.json(data);

         console.log("console body ", data);
        //resp.send("el send body: "+data);
       // const respuesta= await insertUser(req.body);
        
       
    } catch (error) {
        console.log(error);
        //handleHtttp(resp, "ERROR_POST_ITEMS", error);
    }
}


const postUser = async (req: Request, resp: Response) => {
    try {
        
          const response = await insertUser(req.body);
        //resp.send("GETTING_DATA_users");
        resp.send(response);
 
    } catch (error) {
        console.log("la respuesta es error");
        const { id, name } = req.body;
             console.log("Request Body: ",id,"name: ",name);
    resp.status(500).send({ error: error });
  }
};

const updateUser=(req:Request, resp: Response)=>{
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

export {getUserById, getUsers, updateUser, postUser, deleteItem};