import React from 'react';
import { connect } from 'react-redux';

// contains counter that updates as albums are listened to.

const Header = ({ albums }) => {
    const listened = albums.filter(album => album.listened);
    return (
        <div>
            <h3> You've listened to {listened.length} {listened.length === 1 ? "album" : "albums" } from the year I was born. </h3>
        </div>
    )
};

export default connect(state => state)(Header);