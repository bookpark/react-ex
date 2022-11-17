import { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Col } from 'reactstrap'

class ReactstrapNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false };
    }

    toggle = (e) => {
        this.setState({ collapsed: !this.state.collapsed })
    }

    render() {
        return (
            <>
                <Navbar color='faded' light>
                    <NavbarBrand href='/' className='mr-auto'>Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className='mr-2' />
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href='#'>React</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='https://naver.com'>네이버</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </>
        )
    }
}

export default ReactstrapNavbar;