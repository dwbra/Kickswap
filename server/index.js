import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

import userRoutes from './routes/users.js';
import listingRoutes from './routes/listings.js';

import {getListings} from './controllers/listings.js';

//initiate express to be able to call methods from.
const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(express.json());
app.use(cors());

//use express to set the route path for app post routes
app.use('/listings', listingRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

async function x () {
  try {
    let r = await getListings();
    console.log(r)
  } catch (error) {
    console.log(error)
  }
}
x();

// console.log(listings);

const stripe = new Stripe(process.env.stripeSecretTestKey);
app.post("/create-checkout-session", async (req, res) => {
    // const saleListing = getListings(req.id);
    // const title = getListings(req.title);
    const id = req.body.id;
    // console.log({req});
    console.log(id);

    // const listings = await getListings();
    // const product = listings.filter((listing) => listing._id === id);
    // console.log(product);

    // try {
    // const listings = await getListings();
    // const product = listings.filter((listing) => listing._id === id);
    // console.log(product);
    // return product;
    // } catch (error) {
    //     console.log(error)
    // }
    try {
        const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
              // TODO: replace this with the `price` of the product you want to sell
              quantity: 1,
              currency: 'aud',
              amount: 10000000,
              name: "test",
            },
          ],
          payment_method_types: [
            'card',
          ],
        success_url: `${process.env.CLIENT_URL}/success.html`,
        cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
      })
    //   res.json({ url: session.url })
    res.json({url: session.url})
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
});