import React from 'react';
import { useSelector } from 'react-redux';
import myListings from './myListings';

const Account = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const userEmailResult = user?.result?.email;

    const listings = useSelector((state) => state.listings);

    // console.log(listings);

    const matchedListings = listings.filter((listing) => listing.userEmail === userEmailResult);

    // console.log(matchedListings);

    return (
        <div>
            <h3>View your listings and purchased items.</h3>
            <div>
                <h4>Your listings:</h4>
                <div class="kickswap-account-listings">
                {matchedListings.map((listing) => (
                        <div key={listing._id}>
                        <h3>{listing.title}</h3>
                        <h4>{listing.description}</h4>
                        <p>{listing.price}</p>
                        <p>{listing.sold}</p>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
};

export default Account;