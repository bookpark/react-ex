import { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

class ReactstrapBtnGrp extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 10 };
    }

    move = (type, e) => {
        if (type === 'Left') {
            this.setState({ number: this.state.number - 1 })
        } else if (type === 'Right') {
            this.setState({ number: this.state.number + 1 })
        }
    }

    render() {
        return (
            <>
                <ButtonGroup style={{ padding: '0px' }}>
                    <Button onClick={(e => this.move('Left'))}>Left</Button>
                    <Button onClick={(e => this.move('Right'))}>Right</Button>
                </ButtonGroup>
                {this.state.number}
                <Button color='primary'>Blue</Button>
                <Button color='info'>Skyblue</Button>
                <Button color='success'>Green</Button>
                <Button color='warning'>Yellow</Button>
                <Button color='danger'>Red</Button>
                <Button color='dark'>Black</Button>
                <Button color='secondary'>Grey</Button>
                <Button color='light'>White</Button>
            </>
        )
    }

}

export default ReactstrapBtnGrp;