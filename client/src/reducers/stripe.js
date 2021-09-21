import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/ActionTypes';

const stripeReducer = (stripe = [], action) => {
    switch (action.type) {
        // case FETCH_ALL:
        //     return action.payload;
        // case DELETE:
        //     return listings.filter((listing) => listing._id !== action.payload );
        // case UPDATE:
        //     return listings.map((listing) => listing._id === action.payload._id ? action.payload : listing )
        case CREATE:
            return [...stripe, action.payload];
        default: 
            return stripe;
    }
};

export default stripeReducer;