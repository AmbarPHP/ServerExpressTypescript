"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_category_1 = require("../controllers/product_category");
const router = (0, express_1.Router)();
exports.router = router;
// http://localhost:3002/items [GET]
// router.get("/items", (req:Request, resp: Response)=>{
//     resp.send({data: "All data")
// });
router.get("/products", product_category_1.getProductos);
router.get("/product/:id", product_category_1.getProductById);
