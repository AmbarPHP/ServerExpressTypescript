import {Router, Request, Response} from "express";
import {getUsers,getUserById, postUser} from "../controllers/user";
const router_users = Router();


router_users.get("/users", getUsers);
router_users.get("/user/:id", getUserById);
router_users.post("/user", postUser);
// router.put("/item:id",updateItem );
// router.delete("/item:id", deleteItem);


export {router_users};