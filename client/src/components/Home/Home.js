import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import CarouselSlider from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HomepageWidth, HomepageHeaderText } from './styled';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {


    return (
        <div>
            <CarouselSlider/>
            <HomepageWidth>
                <HomepageHeaderText>
                    <h1>Welcome to KickSwap, all things Kicks.</h1>
                    <h3>At KickSwap, we are dedicated to providing a simple and free exchange marketplace for users to buy and sell their second hand shoes.</h3>
                    <SearchBar/>
                </HomepageHeaderText>
            </HomepageWidth>
            
        </div>
    )
};

export default Home;