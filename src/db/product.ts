import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
    detail: { type: String, required: true },
    status: { type: String, required: true },

});

export const ProductModel = mongoose.model('Procuct', ProductSchema);


export const getProducts = () => ProductModel.find();
export const getProductsById = (id: string) => ProductModel.findById(id);
export const createProduct = (values: Record<string, any>) => new ProductModel(values).save().then((product) => product.toObject());

