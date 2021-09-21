import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListingCard } from './styled';
import { Link } from 'react-router-dom';
import { createCheckout } from '../../../actions/Stripe';
import axios from 'axios';

const SingleListing = ({ listing }) => {
    // let base64ToString = Buffer.from(obj, "base64").toString();
    // base64ToString = JSON.parse(base64ToString);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const axiosHandleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:5000/create-checkout-session', { 
            id: listing._id,
            title: listing.title
        })
        .then(function (response) {
            // console.log(response);
            const url = response.data.url
            window.location.href = url
          })
        .catch(function (error) {
            console.log(error);
          });
    };

    return (
            <ListingCard>
            <img id="kickswap-singlelistingimg" alt="" src={listing.selectedFile}/>
            <h3>Title: {listing.title}</h3>
            <h4>Description: {listing.description}</h4>
            <h4>Price: {listing.price}</h4>
            <p>Size: {listing.size}</p>
            <p>Condition: {listing.condition}</p>
            <p>Color: {listing.color}</p>
            <p>Gender Sized: {listing.gender}</p>
            {/* <p><Link to={listing._id}>Buy Now</Link></p> */}
            <form onSubmit={axiosHandleSubmit}>
                <input hidden value={listing._id}></input>
                <input hidden value={listing.title}></input>
            <button type="submit">Checkout</button>
            </form>
            </ListingCard>
    )
};

export default SingleListing;