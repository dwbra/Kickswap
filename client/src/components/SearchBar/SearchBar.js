
import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { useSelector } from 'react-redux';
import { ListingsFlex } from '../Listings/styled';
import SingleListing from '../Listings/SingleListing/Listing';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const listings = useSelector((state) => state.listings)

    const fuse = new Fuse(listings, {
        keys: [
            'title',
            'description',
            'condition',
            'size',
            'color'
        ],
        includeScore: true
    })

    // console.log(listings)
    const results = fuse.search(query);
    const listingsResults = query ? results.map(result => result.item) : listings;

    function handleOnSearch({ currentTarget = {} }){
        const { value } = currentTarget;
        setQuery(value);
    }

    return (
        <div>
            <form className="searchbar">
                <label>Search</label>
                <input type="text" value={query} onChange={handleOnSearch}></input>
            </form>
            <ListingsFlex>
            {listingsResults.map((listing) => (
                <div key={listing._id}>
                    {/* we then pass down the individual listing to the child component */}
                    <SingleListing listing={listing} />
                </div>
            ))}
        </ListingsFlex>
        </div>
    )
};

export default SearchBar;