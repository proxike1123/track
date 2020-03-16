import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks': 
            return action.payload;
        default: 
            return state;   
    };
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', {name, locations});
};

const fetchTracks = dispatch => async () => {
    const resoponse = await trackerApi.get('/tracks');
    dispatch({type: 'fetch_tracks', payload: resoponse.data});
}; 

export const {Provider, Context} = createDataContext(
    trackReducer,
    {createTrack, fetchTracks},
    []
);