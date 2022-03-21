import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAlbum } from './store';

// contains form for creating new album // adding it to the store. This component has its own local state!

class CreateAlbum extends Component {
    constructor() {
        super()
        this.state = {
            newAlbum: ''
        }; 
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    onSave(ev) {
        ev.preventDefault();
        this.props.create(this.state.newAlbum);
    };
    onChange(ev) {
        const change = {};
        change[ev.target.name] = ev.target.value;
        this.setState(change);
    }

    render() {
        const { newAlbum } = this.state;
        const { onChange, onSave } = this;
        return (
            <form onSubmit={onSave}>
                <input name='newAlbum' value={ newAlbum } onChange={ onChange} />
                <button> Add Album </button>
            </form>
        )
    }
}

export default connect(
    null, 
    (dispatch) => {
        return {
            create: (newAlbum) => dispatch(createAlbum(newAlbum))
        }
    }
)(CreateAlbum);