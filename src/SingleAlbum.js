import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// contains all details for an individual component that is clicked on, and a back button

const SingleAlbum = ({ albums, match }) => {

    return (
        <div> 
            { albums.filter(album => album.id === match.params.id*1 ).map( album => {
                return (
                    <div id='singleAlbum' key={ album.id }>
                        <div><img src={album.artworkUrl}/></div>
                        <div> "{album.albumName}"</div>
                        <div> Artist: {album.artistName}</div>
                        <div> Release Date: {album.monthReleased}</div>
                        <div> Genre: {album.genre}</div>
                        <Link to='/albums'> Back </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default connect(state => state)(SingleAlbum); 