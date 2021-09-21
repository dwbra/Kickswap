import express from 'express';
import { getListings, createListing, updateListing, deleteListing } from '../controllers/listings.js';

import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getListings);
//we use our auth middleware to ensure a user is signed in before creating a post
router.post('/',  auth, createListing);
//we use our auth middleware to ensure a user is signed in before updating a post
router.patch('/:id', auth, updateListing);
//we use our auth middleware to ensure a user is signed in before deleting a post
router.delete('/:id', auth, deleteListing);

export default router;