import { useContext, useState } from 'react';
import { UserContext } from './Context1';

function Context3() {
    const [myUser, setMyUser] = useState('');
    const context = useContext(UserContext);

    return (
        <>
            <h1>Context3</h1>
            <h2>{`Hello ${context.user} again!`}</h2>
            <input type='text' value={myUser} onChange={(e)=>{setMyUser(e.target.value)}} />
            <button onClick={()=>{context.setUser(myUser)}}>변경</button>
        </>
    )
}

export default Context3;