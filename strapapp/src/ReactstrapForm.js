import { Component } from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

class ReactstrapForm extends Component {
    render() {
        return (
            <Form>
                <Label for='gender'>Gender</Label>
                <Input type='select' bsSize='sm' id='gender'>
                    <option>no select</option>
                    <option>Female</option>
                    <option>Male</option>
                </Input>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label for=''>Address</Label>
                            <Input type='text' name='address' id='address' />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for=''>Mobile</Label>
                            <Input type='text' name='mobile' id='mobile' />
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for=''>Age</Label>
                            <Input type='text' name='age' id='mobile' />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default ReactstrapForm;