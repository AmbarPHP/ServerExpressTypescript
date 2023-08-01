"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router_users = void 0;
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router_users = (0, express_1.Router)();
exports.router_users = router_users;
router_users.get("/users", user_1.getUsers);
router_users.get("/user/:id", user_1.getUserById);
router_users.post("/user", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});
router_users.put("/item:id", user_1.updateUser);
