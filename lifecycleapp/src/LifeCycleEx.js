import React, { Component } from 'react';

class LifeCycleEx extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps");
    //     return { name: props.name, age: props.age };
    // }

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            age: props.age,
        };
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({ ...this.state, name: '북', age: '20'})
    }

    shouldComponentUpdate(props, state) {
        console.log('shouldComponentUpdate');
        return true;
    }

    render() {
        console.log('render');
        return <h1>LifeCycle Test: {this.state.name}, {this.state.age}</h1>
    }

}

export default LifeCycleEx;