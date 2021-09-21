import React from "react";
import { Carousel } from "react-responsive-carousel";
import { SliderHeight } from "./styled";

const CarouselSlider = () => {

    return (
        <SliderHeight>
        <Carousel autoPlay infiniteLoop={true} showThumbs={false}>
            <div>
            <img alt="" src="https://wallpapercave.com/wp/wp2953607.jpg" />
            <p className="legend">Welcome to Kickswap</p>
            </div>
            <div>
            <img alt="" src="https://wallpapercave.com/wp/wp2881139.jpg" />
            {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
            <img alt="" src="https://wallpapercave.com/wp/wp2953647.jpg" />
            {/* <p className="legend">Legend 3</p> */}
            </div>
        </Carousel>
        </SliderHeight>
    )
};

export default CarouselSlider;