import { Schema, model, Model, Types } from "mongoose";
import { IProductCategory } from '../interfaces/productCategory.interface';

const productCategorySchema = new Schema<IProductCategory>(
    {

        id: { type: String, require: true },
        name: { type: String, require: true },
        subcategories: [{
            id: Number,
            name: String
        }]

    });

//dos parametros <nombre del schema en la base de datos, definicion del schema>
const ProductCategory = model("product_categories", productCategorySchema);
export default ProductCategory;
