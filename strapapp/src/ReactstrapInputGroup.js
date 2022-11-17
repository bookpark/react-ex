import { Component } from 'react';
import { InputGroup, InputGroupText, Input, Button } from 'reactstrap';

class ReactstrapInputGroup extends Component {
    render() {
        return (
            <>
                <InputGroup className='input-group-mb3'>
                    <div className="input-group-append">
                        <Input className='input-group-text' placeholder='userid'></Input>
                        <InputGroupText>@reactmail.com</InputGroupText>
                    </div>
                </InputGroup>
                <InputGroup className='input-group-mb3'>
                    <div className="input-group-prepend">
                        <Button>버튼</Button>
                        <Input />
                    </div>
                </InputGroup>
            </>
        )
    }
}

export default ReactstrapInputGroup;