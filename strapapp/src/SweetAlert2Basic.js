import { Component } from 'react';
import Swal from 'sweetalert2';

class SweetAlert2Basic extends Component {

    componentDidMount() {
        Swal.fire('1. SweetAlert').then(result => { alert('2. result.value: ' + result.value) })
    }

    render() {
        return (
            <h1>SweetAlert2 Test</h1>
        )
    }
}

export default SweetAlert2Basic;