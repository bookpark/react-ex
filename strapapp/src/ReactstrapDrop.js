import { Component } from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

class ReactstrapDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {dropdownOpen : false};
    }

    toggle = (e) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <>
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>헤더</DropdownItem>
                    <DropdownItem disabled>비활성화 버튼</DropdownItem>
                    <a href="https://www.naver.com">
                        <DropdownItem>네이버로 이동</DropdownItem>
                    </a>
                    <DropdownItem onClick={e => alert("Alert 버튼")}>
                        Alert 버튼
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            </>
        )
    }
}

export default ReactstrapDrop;


