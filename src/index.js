import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import { loadAlbums } from './store';
import AllAlbums from './AllAlbums'
import CreateAlbum from './CreateAlbum';


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
                <h1> Albums Released in 1989 </h1>
                <CreateAlbum />
                <AllAlbums />
                
            </div>
        )
    }
});

render(
<Provider store={ store }> 
<Main />
</Provider>
, document.querySelector('#root'));