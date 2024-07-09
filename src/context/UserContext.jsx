import React, { useState } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {


const [user, setUser] = useState('');
const [status, setStatus] = useState('');
const [theme, setTheme] = useState('light');

return (
  <UserContext.Provider value={{ user, setUser ,status, setStatus,theme, setTheme}}>
    {children}
  </UserContext.Provider>
)
}
export { UserContext};