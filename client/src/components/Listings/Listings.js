import React from 'react';
import { useSelector } from 'react-redux';
import SingleListing from './SingleListing/Listing';
import { ListingsFlex } from './styled';

const AllListings = () => {
    //how we access the data from the global redux store
    //we grab all of the listings from the global state
    const listings = useSelector((state) => state.listings);

    return (
        <div>
        <ListingsFlex>
            {listings.map((listing) => (
                <div key={listing._id}>
                    {/* we then pass down the individual listing to the child component */}
                    <SingleListing listing={listing} />
                </div>
            ))}
        </ListingsFlex>
        </div>
    )
};

export default AllListings;