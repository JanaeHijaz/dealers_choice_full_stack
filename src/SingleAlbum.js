import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// contains all details (plus image?) for an individual component that is clicked on, and a back button
// mapStateToProps only to receive data from the store, not dispatching any action objects or using thunks. 
// export it to AllAlbums.js component

const SingleAlbum = ({ albums, match }) => {

    return (
        <div> 
            { albums.filter(album => album.id === match.params.id*1 ).map( album => {
                return (
                    <div key={ album.id }>
                        <p> Album Name: {album.albumName}</p>
                        <p> Month Released: {album.monthReleased}</p>
                        <p> Genre: {album.genre}</p>
                        <p> Artist Name: {album.artistName}</p>
                        <Link to='/albums'> Back </Link>
                    </div>
                )
            })}
        </div>
    //  <div id='single-album'>
    //      <div id='album-info'>
    //         <p> FULL ALBUM DATA HERE TO BE UPDATED </p>
    //      </div>
    //  </div>
    )
}

export default connect(state => state)(SingleAlbum); 