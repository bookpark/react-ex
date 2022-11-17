import { Component } from 'react';
import { Button, Fade } from 'reactstrap';

class ReactstrapFade extends Component {
    constructor(props) {
        super(props);
        this.state = { fadeInOut: true }
    }
    toggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut });
    }
    render() {
        return(
            <>
                <Button color='success' onClick={this.toggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} tag='p'>
                    Lorem ipsum dolar sit amet
                </Fade>
            </>
        )
    }
}

export default ReactstrapFade;