import mongoose from 'mongoose';


const ProductsSchema = new mongoose.Schema({
    detail: { type: String, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },

});

export const ProductsModel = mongoose.model('Products', ProductsSchema);


export const getProducts = () => ProductsModel.find();
export const getProductsById = (id: string) => ProductsModel.findById(id);
export const createProduct = (values: Record<string, any>) => new ProductsModel(values).save().then((products) => products.toObject());

