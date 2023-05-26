"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productCategorySchema = new mongoose_1.Schema({
    id: { type: String, require: true },
    name: { type: String, require: true },
    subcategories: [{
            id: Number,
            name: String
        }]
});
//dos parametros <nombre del schema en la base de datos, definicion del schema>
const ProductCategory = (0, mongoose_1.model)("product_categories", productCategorySchema);
exports.default = ProductCategory;
