import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class AutoSelect extends React.Component {

    constructor() {
        super()
        this.state={
            text:"React Project"
        }
    }   

    componentDidMount = () => {
        this.refs.input.focus();
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleFocus = (e) => {
        e.currentTarget.select();
    }    

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref="input"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                />               
            </div>
        )
    }
}
