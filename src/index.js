import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import store from './store';
import axios from 'axios';


// contains componentDidMount(), and renders a basic header, and then all subsequent components 

const Main = connect(
    (state) => {
        return {albums: state}
    },
    (dispatch) => {
        return {
            bootstrap: async() => {
                dispatch(loadAlbums());
            },
        };
    }
)
(class Main extends React.Component {
constructor (){
    super();
    this.state = {
        albums: []
    }
}
async componentDidMount(){
 const response = await axios.get('/api/albums')
 const albums = response.data;
 this.setState({albums});
}
    render() {
        return (
            <div id='main'>
                <h1> Albums Released in 1989 </h1>
                {/* <Header />
                <CreateAlbum />
                <AllAlbums /> */}
            </div>
        )
    }
});

render(
<Main />
, document.querySelector('#root'));