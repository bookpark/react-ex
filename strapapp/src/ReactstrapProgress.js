import { Component } from 'react';
import { Progress } from 'reactstrap';

class ReactstrapProgress extends Component {
    constructor(props) {
        super(props);
        this.state = { progress: 35 }
    }

    progress = (e) => {
        if (this.state.progress !== 100) {
            setTimeout((() => this.setState({ progress: this.state.progress + 1 })).bind(this), 100)
        }
    }

    render() {
        return (
            <>
                <Progress color='info' value={this.state.progress}>{this.state.progress}</Progress>
                <Progress multi>
                    <Progress bar color='warning' value='25'>25%</Progress>
                    <Progress bar color='success' value='35'>35%</Progress>
                    <Progress bar value='20'>start</Progress>
                    <Progress bar color='danger' value='20'>20%</Progress>
                </Progress>
            </>
        )
    }
}

export default ReactstrapProgress;