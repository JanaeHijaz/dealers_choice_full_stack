import React from 'react';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';

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

const createAlbum = (newAlbum) => {
    return async function(dispatch) {
        const album = (await axios.post('/api/albums', {newAlbum})).data
        dispatch({type: CREATE_ALBUM, album});
    }
};

const deleteAlbum = async(album) => {
     await axios.delete(`/api/albums/${album.id}`);
     store.dispatch({type: DELETE_ALBUM, album}); 
     // get "ReferenceError: dispatch is not defined" when i dont have store on line 51
};

const updateAlbum = (album) => {
    return async function(dispatch){
        const updated = (await axios.put(`/api/albums/${album.id}`, { listened: !album.listened })).data;
        dispatch({type: UPDATE_ALBUM, album: updated})
    }
};

// create store

const store = createStore(reducer, applyMiddleware(thunk));


export default store;
export {
    loadAlbums,
    createAlbum,
    deleteAlbum,
    updateAlbum
}