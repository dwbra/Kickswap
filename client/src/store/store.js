import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth';
import listingReducer from '../reducers/listings';
import stripeReducer from '../reducers/stripe';

export const store = configureStore({
  reducer: {
    listings: listingReducer,
    auth: authReducer,
    stripe: stripeReducer
  },
});
