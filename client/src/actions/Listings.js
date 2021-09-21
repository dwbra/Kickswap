import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/ActionTypes';
import * as api from '../api/index';

export const getListings = () => async (dispatch) => {
    try {
        const { data } = await api.fetchListings();
        dispatch({ type: FETCH_ALL, payload: data })
    } catch (error){
        console.log(error.message)
    }

}

export const createListing = (listing) => async (dispatch) => {
    try {
        const { data } = await api.createListing(listing);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateListing = (id, listing) => async (dispatch) => {
    try {
        const {data} = await api.updateListing(id, listing);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteListing = (id) => async (dispatch) => {
    try {
        await api.deleteListing(id);
        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error)
    }
}