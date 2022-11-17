import { Component } from 'react';
import { Progress } from 'reactstrap';

class ReactstrapProgress extends Component {
    constructor(props) {
        super(props);
        this.state = { progress: 0 }
    }

    progress = (e) => {
        if (this.state.progress !== 100) {
            let id = setInterval(function () {
                if (this.state.progress == 100) {
                    clearInterval(id);
                    return;
                }
                this.setState({ progress: this.state.progress + 1 })
            }.bind(this), 100)
        }
    }

    componentDidMount() {
        this.progress();
    }

    render() {
        return (
            <>
                <Progress color='info' value={this.state.progress}>{this.state.progress}%</Progress>
                <Progress multi>
                    <Progress bar color='warning' value='50'>시작이 반이다</Progress>
                    <Progress bar color='success' value='10'>노력하자</Progress>
                    <Progress bar value='20'>거의 다 왔다</Progress>
                    <Progress bar color='danger' value='20'>힘내!</Progress>
                </Progress>
            </>
        )
    }
}

export default ReactstrapProgress;