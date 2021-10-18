import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const AllContext = useFirebase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;