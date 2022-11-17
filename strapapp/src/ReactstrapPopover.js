import { Component } from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody, Popover } from 'reactstrap';

class ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button id='popover_id' type='button'>
                    Popover Button
                </Button>
                <UncontrolledPopover placement='right' target='popover_id'>
                    <PopoverHeader>React start</PopoverHeader>
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default ReactstrapPopover;