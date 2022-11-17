import { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

class ReactstrapListGroup extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem color='danger' className='justify-content-between'>
                    Badge<Badge pill>react</Badge>
                </ListGroupItem>
                <ListGroupItem disabled tag='a' href='#'>Disabled</ListGroupItem>
                <ListGroupItem tag='a' href='https://naver.com'>Link</ListGroupItem>
                <ListGroupItem tag='button' action onClick={e => alert('button')}></ListGroupItem>
            </ListGroup>
        )
    }
}

export default ReactstrapListGroup;