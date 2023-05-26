import {IProductCategory} from "../interfaces/productCategory.interface";
//importamos el model para usar el objeto 
import ProductCategory from "../models/productCategory.model";

const inserProductCategory = async(item:IProductCategory)=>{
    console.log(item);
    const responseItem= await ProductCategory.create(item);
    return responseItem;
}

const getAllProductos = async()=>{
  
    const responseItem= await ProductCategory.find({});
    //console.log("Busco la razon por la cual no me regresa datos",responseItem);
    return responseItem;
    
}

const getOneProduct = async (id:string)=>{
    const responseItem= await ProductCategory.find({"subcategories.name":id})
    return responseItem;
}

export {inserProductCategory, getAllProductos, getOneProduct};