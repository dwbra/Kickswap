import { combineReducers } from 'redux';

import listings from './listings';
import auth from './auth';
import stripe from './stripe';

export default combineReducers({ listings, auth, stripe });