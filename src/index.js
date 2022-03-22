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
// constructor (){ // --------- don't need this with a redux store! 
//     super();
//     this.state = {
//         albums: []
//     }
// }
componentDidMount(){
//  const response = await axios.get('/api/albums') // -----no axios calls here!
//  const albums = response.data;
//  this.setState({albums});
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

// could use this syntax instead: const Main = connect(state => state)

render(
<Provider store={ store }> 
<HashRouter>
<Main />
</HashRouter>
</Provider>
, document.querySelector('#root'));