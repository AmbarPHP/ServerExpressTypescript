import {IUser} from "../interfaces/user.interface";
//importamos el model para usar el objeto 
import UserModel from "../models/user.model";

const insertUser = async(item:IUser)=>{
    //console.log("no llega el payload:",item);
    const responseItem= await UserModel.create(item);
    return responseItem;
}

const getAllUsers = async()=>{
    
    // const responseItem = { hola: "hola" };
    // return responseItem;
    const responseItem = await UserModel.find({});
       //return "NADA";
    console.log(responseItem);
    return responseItem;
    
}



const getOneUser = async (id:number)=>{
    const responseItem= await UserModel.find({"id":id})
    return responseItem;
}

export {insertUser, getAllUsers, getOneUser};