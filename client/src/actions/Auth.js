import { AUTH } from '../constants/ActionTypes';
//import everything as one object so you can use dot notation to access properties(functions).
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
        
    } catch (error) {
        console.log(error)
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error)
    }
};