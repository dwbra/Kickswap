import React from 'react';
import { ListingCard } from '../Listings/SingleListing/styled';
import { Link } from 'react-router-dom';

const myListings = ({ listing }) => {
    // let base64ToString = Buffer.from(obj, "base64").toString();
    // base64ToString = JSON.parse(base64ToString);

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
            <p><Link to={2}>Edit now</Link></p>
            </ListingCard>
    )
};

export default myListings;