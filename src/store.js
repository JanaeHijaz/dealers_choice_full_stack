import React from 'react';
import thunks from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';


// create action types

const LOAD_ALBUMS = 'LOAD_ALBUMS';
const CREATE_ALBUM = 'CREATE_ALBUM';
const DELETE_ALBUM = 'DELETE_ALBUM';
const UPDATE_ALBUM = 'UPDATE_ALBUM';

// create combineReducer 

const albumsReducer = (albums = [], action) => {
    if (action.type === LOAD_ALBUMS) {
        return action.albums; 
    }
    if (action.type === CREATE_ALBUM) {
        return [...albums, action.album];
    }
    if (action.type === DELETE_ALBUM) {
        return albums.filter(album => album.id !== action.album.id);
    }
    if (action.type === UPDATE_ALBUM) {
        return albums.map(album => album.id === action.album.id? action.album : album)
    }
    return albums;
}

const reducer = combineReducers({albums: albumsReducer});

// thunks here

const loadAlbums = () => {
    return async function(dispatch) {
        const albums = (await axios.get('/api/albums')).data;
        dispatch({type: LOAD_ALBUMS, albums});
    }
};

const createAlbum = () => {
    
};

const deleteAlbum = () => {
    
};

const updateAlbum = () => {
    
};

// create store

const store = createStore(reducer, applyMiddleware(thunks));


export default store;
export {
    loadAlbums,
}