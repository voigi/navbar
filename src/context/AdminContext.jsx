import React, { useState } from 'react';

const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {


const [admin, setAdmin] = useState('');
const [status, setStatus] = useState('');

return (

  <AdminContext.Provider value={{ admin, setAdmin ,status, setStatus}}>
    {children}
  </AdminContext.Provider>
)
}
export { AdminContext};