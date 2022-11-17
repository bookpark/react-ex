import { Component } from 'react';
import { Table } from 'reactstrap';

class ReactstrapTable extends Component {
    render() {
        return (
            // <Table 
            <Table bordered striped hover dark size='sm'>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>React의 모든 것</td>
                        <td>$2000</td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>Spring의 모든 것</td>
                        <td>$3000</td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td>JPA의 모든 것</td>
                        <td>$4000</td>
                    </tr>
                    <tr>
                        <th scope='row'>4</th>
                        <td>Python의 모든 것</td>
                        <td>$2200</td>
                    </tr>
                    <tr>
                        <th scope='row'>5</th>
                        <td>2022 맥북 에어 M2</td>
                        <td>$1200</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default ReactstrapTable;