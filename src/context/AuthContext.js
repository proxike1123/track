import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import {navigate} from '../navigationRef';
const authReducer = (state, actions) => {
    switch (actions.type) {
        case 'signin': 
            return { errorMessage: '', token: actions.payload.token, email: actions.payload.email};
        case 'add_error': 
            return {...state, errorMessage: actions.payload};
        case 'clear_error_message': 
            return {...state, errorMessage: ''};
        case 'signout': 
            return {errorMessage: '', token: null}
        default: 
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const email = await AsyncStorage.getItem('mail');
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type: 'signin', payload: {token: token, email: email}});
        navigate('trackList');
    } else {
        navigate('signup');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
};

const signup = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('mail', email);
        dispatch({type: 'signin', payload: {token: response.data.token, email: email}});
        navigate('trackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Some thing wrong with sign up'})
    }
};


const signin = dispatch => async ({email, password}) => {
    try {
        const response = await trackerApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('mail', email);
        dispatch({type: 'signin', payload: {token: response.data.token, email: email}});
        navigate('trackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in'});
    }
};


const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type: 'signout'});
        navigate('loginFlow');
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: '', email: null }
)