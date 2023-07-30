import {Router, Request, Response} from "express";
import {deleteItem, getProductos, getProductById, postItem, updateItem} from "../controllers/product_category";
const router = Router();

// http://localhost:3002/items [GET]

router.get("/items", (req:Request, resp: Response)=>{
    resp.send({ data: "All data"});
});
router.get("/products", getProductos);
router.get("/product/:id", getProductById);
// router.post("/item", postItem);
// router.put("/item:id",updateItem );
// router.delete("/item:id", deleteItem);


export {router};