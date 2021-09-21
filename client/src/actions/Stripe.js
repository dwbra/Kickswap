// import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/ActionTypes';
// import * as api from '../api/index';

// export const createCheckout = (stripeData) => async (dispatch) => {
//     try {
//         const { data } = await api.stripeCheckout(stripeData);
//         dispatch({ type: CREATE, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// }