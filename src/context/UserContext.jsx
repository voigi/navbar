import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {


const [user, setUser] = useState('');
const [status, setStatus] = useState('');
const [prevStatus, setPrevStatus] = useState('');
const [theme, setTheme] = useState('light');
const [logout, setLogout] = useState('');

return (

  <UserContext.Provider value={{ user, setUser ,status, setStatus,theme, setTheme, logout, setLogout, prevStatus, setPrevStatus}}>
    {children}
  </UserContext.Provider>
)
}
export { UserContext};