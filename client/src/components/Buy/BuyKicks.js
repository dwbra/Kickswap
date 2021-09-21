import React from 'react';
import { useSelector } from 'react-redux';
import Listings from '../Listings/Listings'

import { DivPadding } from './styled';

const BuyPage = () => {

    return (
        <DivPadding>
            <Listings/>
        </DivPadding>
    )
};

export default BuyPage;
