import mongoose from 'mongoose';

const listingSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    size: Number,
    name: String,
    creator: String,
    condition: String,
    color: String,
    selectedFile: String,
    gender: String,
    userEmail: String,
    sold: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const productListing = mongoose.model('ProductListing', listingSchema);

export default productListing;