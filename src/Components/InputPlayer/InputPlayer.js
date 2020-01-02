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
        let { name } = this.state;
        return (
        <div>
            <label>Player Name</label>
            <input 
                onChange={ this.handleChangeName }
                type="text" 
                placeholder="Enter Player Name"
                value = { name }
                required >
            </input>
            <Button
             disabled={ name === "" ? true : false }
             handleClick={ this.handleSubmit }
             className="btn btn-main"
             >Add</Button>
        </div>
        );
    }
}

export default InputPlayer;