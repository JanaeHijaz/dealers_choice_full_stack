import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import store from './store';
import { loadAlbums } from './store';
import AllAlbums from './AllAlbums'
import CreateAlbum from './CreateAlbum';
import Header from './Header';
import SingleAlbum from './SingleAlbum';


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

componentDidMount(){
 this.props.bootstrap();
}

    render() {
        return (
            <div id='main'>
                <h1> Childhood Sounds: 1989</h1>
                <Header />
                <CreateAlbum />
                <Route exact path='/albums' component={ AllAlbums } />
                <Route path='/albums/:id' component={ SingleAlbum }/>
            </div>
        )
    }
});


render(
<Provider store={ store }> 
<HashRouter>
<Main />
</HashRouter>
</Provider>
, document.querySelector('#root'));