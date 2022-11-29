import { useState, createContext } from 'react';
import Context2 from './Context2';

export const UserContext = createContext();

function Context1() {
    const [user, setUser] = useState('hong');
    const context = {
        user: user,
        setUser: setUser.bind(this)
    }
    return (
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <Context2 />
        </UserContext.Provider>
    )
}

export default Context1;