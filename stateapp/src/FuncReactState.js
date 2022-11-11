import { useState } from 'react';


function FuncReactState({ reactString }) {
    // this.state 대신 useState로 값 가져오기
    // const [StateString, setStateString] = useState(reactString);
    // const [StateNumber, setStateNumber] = useState(200);
    const [StateCombine, setStateCombine] = useState({ StateString: reactString, StateNumber: 200 });

    return (
        // React Fragments
        <>
            <div>{StateCombine.StateString} {StateCombine.StateNumber}</div>
            <button onClick={(e) => setStateCombine({ ...StateCombine, StateString: "리액트" })}>리액트</button>
            <button onClick={(e) => setStateCombine({ ...StateCombine, StateNumber: 300 })}>300</button>
            {/* <button onClick={(e) => setStateString("리액트")}>리액트</button>
            <button onClick={(e) => setStateNumber("300")}>300</button> */}
        </>
    )
}

export default FuncReactState;