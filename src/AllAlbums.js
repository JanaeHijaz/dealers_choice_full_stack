import React from 'react';
import { connect } from 'react-redux';
import { deleteAlbum } from './store';

// contains full list of albums, and delete button for each, and toggle for listened to albums

const AllAlbums = ({ albums }) => {

    return (
        <div>
            <ul>
                {albums.map(album => {
                    return (
                    <li key={album.id}>
                        {album.albumName} <button onClick={ () => deleteAlbum(album) }> remove </button>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(state => state)(AllAlbums)