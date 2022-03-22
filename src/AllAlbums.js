import React from 'react';
import { connect } from 'react-redux';
import { deleteAlbum } from './store';
import { updateAlbum } from './store';
import { Link } from 'react-router-dom';

// contains full list of albums, and delete button for each, and toggle button for listened to albums

const AllAlbums = ({ albums, update }) => {

    return (
        <div>
            <ul>
                {albums.map(album => {
                    return (
                    <li key={album.id}> 
                    <button onClick={ () => update(album)} className={ album.listened ? 'listened': '' }> Listened </button>
                    <Link to={`/albums/${album.id}`}> "{album.albumName}" by {album.artistName} </Link>
                        <button onClick={ () => deleteAlbum(album) }> x </button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        update: (album) => {
            dispatch(updateAlbum(album));
        }
    }
}

export default connect(state => state, mapDispatchToProps)(AllAlbums)