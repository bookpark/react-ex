import { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class ReactstrapPagination extends Component {
    pagination = (type) => {
        alert('Go ' + type);
    }

    render() {
        return (
            <>
                <Pagination size='lg' aria-label='Page navigation example'>
                    <PaginationItem>
                        <PaginationLink first onClick={e => this.pagination('previous')} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={e => this.pagination('previous')} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.pagination('1')} />1
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.pagination('2')} />2
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e => this.pagination('3')} />3
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={e => this.pagination('last')} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={e => this.pagination('last')} />
                    </PaginationItem>
                </Pagination>
            </>
        )
    }
}

export default ReactstrapPagination;