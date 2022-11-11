import { Component } from 'react';
import { Badge, Button } from 'reactstrap';

class ReactstrapBadge extends Component {
    render() {
        return (
            <>
                <h3>PRODUCT NAME <Badge color='secondary'>Hit!</Badge></h3>
                <Button color='warning' outline>
                    Accessor <Badge color='dark'>4</Badge>
                </Button>
                <Badge color='danger' pill>pill</Badge>
                <Badge href='https://www.naver.com' color='primary'>Go!</Badge>
            </>
        )
    }
}

export default ReactstrapBadge;