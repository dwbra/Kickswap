import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetchListings = () => API.get('/listings');
export const createListing = (newListing) => API.post('/listings', newListing); 
export const updateListing = (id, updatedListing) => API.patch(`/listings/${id}`, updatedListing);
export const deleteListing = (id) => API.delete(`/listings/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// export const stripeCheckout = (checkoutData) => API.post('/stripe/checkout', checkoutData);
// export const stripeCheckout = (checkoutData) => API.post('/', checkoutData);