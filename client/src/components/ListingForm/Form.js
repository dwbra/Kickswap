import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { FormStyling } from './styled';
import { useDispatch } from 'react-redux';
import { createListing, updateListing } from '../../actions/Listings';
import { useHistory } from 'react-router';

// const FileBase = require('react-file-base64');

const ListingForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ listingData, setListingData ] = useState({
        title: '',
        description: '',
        price: '',
        size: '',
        condition: '',
        color: '',
        selectedFile: '',
        gender: '',
    });

    const user = JSON.parse(localStorage.getItem('profile'));

    // handleChange(e) {
    //     setListingData({value: e.target.value});
    //   };

    const clear = () => {
        setListingData({ title: '', description: '', price: '', size: '', condition: '', color: '', selectedFile: '', gender: '', });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(listingData)
        try {
            dispatch(createListing({...listingData, userEmail: user?.result?.email}));
            clear();
            alert("Your listing has been posted. ")
            history.push('/account');
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div id="kickswap-sellkicksform">
            <h1>List your kicks by filling out the below form</h1>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <FormStyling>
                <label>
                    Name Your Kicks
                    <input name="title" type="text" placeholder="Nike Air Jordans" value={listingData.title} onChange={(event) => setListingData({ ...listingData, title: event.target.value })}></input>
                </label>
                <label>
                    Describe Your Kicks
                    <input name="description" type="text" value={listingData.description} onChange={(event) => setListingData({ ...listingData, description: event.target.value })}placeholder="A barely used..."></input>
                </label>
                <label>
                    How Much Are You After? 
                    <input name="price" type="number" value={listingData.price} onChange={(event) => setListingData({ ...listingData, price: event.target.value })}placeholder="$100"></input>
                </label>
                <label>
                    What size are the kicks?:
                    <select name="size" value={listingData.size} placeholder="9" onChange={(event) => setListingData({ ...listingData, size: event.target.value })}>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                    </select>
                </label>
                <label>
                    What condition are the kicks?
                    <select name="condition" value={listingData.condition} placeholder="used" onChange={(event) => setListingData({ ...listingData, condition: event.target.value })}>
                        <option value="used">Used</option>
                        <option value="almost new">Almost New</option>
                        <option value="new">New</option>
                    </select>
                </label>
                <label>
                    What color are the kicks?
                    <input name="color" type="text" value={listingData.color} onChange={(event) => setListingData({ ...listingData, color: event.target.value })} placeholder="dark blue"></input>
                </label>
                <label>
                    Are the kicks sized for men or women?
                    <input name="gender" type="text" value={listingData.gender} onChange={(event) => setListingData({ ...listingData, gender: event.target.value })} placeholder="mens"></input>
                </label>
                <FileBase type="file" multiple={false} onDone={({base64}) => setListingData({ ...listingData, selectedFile: base64})}/>
                <button type="submit">Submit</button>
                </FormStyling>
            </form>
        </div>

    )
};

export default ListingForm;