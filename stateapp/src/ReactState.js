import React, { Component } from 'react';

class ReactState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: this.props.reactString,
            StateNumber: 200,
        };
    }

    stateChange = () => {
        // 이렇게는 state값을 바꾸지 못함
        // this.state.StateNumber = 300;
        this.setState({ ...this.state, StateNumber: 300 })
    }

    render() {
        return (
            <div>
                <div>{this.state.StateString} {this.state.StateNumber}</div>
                <button onClick={(e) => this.setState({...this.state, StateString: "리액트"})}>리액트</button>
                <button onClick={(e) => this.setState({...this.state, StateNumber: 300})}>300</button>
                {/* <button onClick={(e) => { this.stateChange() }}>300</button> */}
            </div>
        )
    }
}

export default ReactState;