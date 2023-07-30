import { Schema, model, Model, Types } from "mongoose";
import { IUser } from '../interfaces/user.interface';

const userSchema = new Schema<IUser>(
    {
        id: { type:Number},
        name: { type: String, require: true },
        username: { type: String },
        email: { type: String },
        address: [{
            street: { type: String },
            suite: { type: String },
            city: { type: String },
            zipcode: { type: String },
            geo: [{
                lat: { type: String },
                lng: { type: String },
            }],
        }]
    }
);
//dos parametros <nombre del schema en la base de datos, definicion del schema>
const UserModel = model("users", userSchema);
export default UserModel;