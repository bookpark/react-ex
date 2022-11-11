import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class ReactstrapAlert extends Component {
    render() {
        return (
            <>
                <Alert color='primary'>
                    Simple Alert [color : primary]
                </Alert>
                <UncontrolledAlert color='warning'>
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </>
        )
    }
}

export default ReactstrapAlert;