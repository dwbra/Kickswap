import Mongoose from 'mongoose';
import ProductListing from '../models/productListing.js'

export const getListings = async (req, res) => {
    try {
        const ProductListings = await ProductListing.find();
        res.status(200).json(ProductListings);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createListing = async (req, res) => {
    //in post request we have access to request.body object
    const listing = req.body;
    const newProductListing = new ProductListing({ ...listing, creator: req.userId, createdAt: new Date().toISOString() });
    try {   
        await newProductListing.save();
        res.status(201).json(newProductListing);
    } catch (error) {
        res.status(409).json({message: error})
    }
};

export const updateListing = async (req, res) => {
    const { id: _id } = req.params;
    const listing = req.body;
    try {
        if (!Mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No listing with that id');
        const updatedListing = await ProductListing.findByIdAndUpdate(_id, { ...listing, _id}, { new : true });
        res.json(updatedListing);
    } catch {
        res.status(409).json({message: error})
    }
}

export const deleteListing = async (req, res) => {
    const { id } = req.params;
    if (!Mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No listing with that id');
    await ProductListing.findByIdAndDelete(id);
    res.json({message: 'Listing deleted successfully.'});
};

// export const findSpecificListingByID = async (req, res, next) => {
//     const {id} = req.body
//     // try {
//     //     const product = await ProductListing.findById(id);
//     //     res.status(200).json(product);
//     // } catch (error) {
//     //     res.status(404).json({ message: error });
//     // }
//     const product = await findById(id, function (err, docs) {
//         if (err){
//             console.log(err);
//         }
//         else{
//             console.log("Result : ", docs);
//         }
//     });
// };