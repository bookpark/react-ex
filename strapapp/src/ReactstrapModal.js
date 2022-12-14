import { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReactstrapModal extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false }
    }

    toggle = (e) => {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        return (
            <>
                <Button color='warning' onClick={this.toggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader>Modal Header</ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                </Modal>
            </>
        )
    }
}

export default ReactstrapModal;