import {Router, Request, Response} from "express";
import {getUsers,getUserById, postUser,updateUser} from "../controllers/user";
const router_users = Router();


router_users.get("/users", getUsers);
router_users.get("/user/:id", getUserById);
router_users.post("/user",  (req, res, next) => {
  console.log(req.body)
  res.json(req.body)

});
router_users.put("/item:id",updateUser );
// router.delete("/item:id", deleteItem);



export {router_users};