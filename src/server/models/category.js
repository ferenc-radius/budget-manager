import mongoose from 'mongoose';
import db from "../conect";

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    },
    parent: {
        type : mongoose.Schema.ObjectId, ref: 'Category'
    }
}, {
    timestamps: true
});

const Category = db.model('Category', CategorySchema);
export default Category;