// import { Component } from "react";
import Car from "./Car";

// class Garage extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         const carInfo = {
//             name: "Ford",
//             model: "Mustang",
//         }
//         return (
//             <Car brand={carInfo} />
//             // <Car brand={
//             //     {
//             //         name: "Ford",
//             //         model: "Mustang"
//             //     }
//             // } />
//         );
//     }
// }

function Garage() {
    return (
        <Car brand={{name: "Ford", model: "Mustang" }} />
    );
}

export default Garage;