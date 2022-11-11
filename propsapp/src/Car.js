// import { Component } from "react";

// class Car extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         return (
//             <h2>I am a {this.props.brand.name} {this.props.brand.model} </h2>
//         )
//     }
// }

function Car({ brand }) {
    return <h2>I am a {brand.name} {brand.model} </h2>
}

export default Car;