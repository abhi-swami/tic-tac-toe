/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const LoginContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const login = () => setIsLogin(true);
    const logout = () => setIsLogin(false);

    return (
        <LoginContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};



export default LoginContext;

