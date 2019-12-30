import React, { Component } from 'react';
import Button from '../Button/Button'

class InputPlayer extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
      
    }

    handleChangeName(e) {
        this.setState({
            name: e.currentTarget.value,
        });
    }

    handleSubmit(e){
        e.preventDefault();

        let { handleAddPlayer } = this.props;
        let { name } = this.state;
        
        handleAddPlayer(name);
        
        this.setState({
            name: "",
        })
        
    }

    render() {
        return (
        <>
            <label>Name</label>
            <input 
                onChange={ this.handleChangeName }
                type="text" 
                placeholder="Enter Player Name"
                required >
            </input>
            <Button handleClick={ this.handleSubmit }>Add</Button>
        </>
        );
    }
}

export default InputPlayer;