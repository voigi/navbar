import React from 'react'
import { users } from '../model/Mock';
import {admins} from '../model/AdminMock';


const DataTable = () => {
  return (
<div className="container">
  <table  className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Username</th>
        <th>Password</th>
        <th>Email</th>
        <th>Tournoi</th>
        
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.userId}>
          <td>{user.userId}</td>
          <td>{user.username}</td>
          <td>{user.password}</td>
          <td>{user.email}</td>
          <td>{user.tournoi.toString()}</td>
          
        </tr>
      ))}
      <h4>Admin</h4>

     
        {admins.map((admin) => (
        <tr key={admin.userId}>
          <td>{admin.userId}</td>
          <td>{admin.username}</td> 
          <td>{admin.password}</td>
          <td>{admin.email}</td>
         
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default DataTable