import React from 'react';
import { connect } from 'react-redux';
import { deleteAlbum } from './store';
import { updateAlbum } from './store';

// contains full list of albums, and delete button for each, and toggle for listened to albums

const AllAlbums = ({ albums, update }) => {

    return (
        <div>
            <ul>
                {albums.map(album => {
                    return (
                    <li onClick={ () => update(album)} key={album.id} className={ album.listened ? 'listened': '' }> 
                        {album.albumName} by {album.artistName} <button onClick={ () => deleteAlbum(album) }> remove </button>
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