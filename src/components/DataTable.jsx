import React from 'react'
import { users } from '../model/mock';

const DataTable = () => {
  return (
 <div className="container">
    <table class="table">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Username</th>
        <th scope="col">Password</th>
        <th scope="col">Email</th>
        
        </tr>
    </thead>
    {
        users.map((user)=>
        
        

  
  <tbody>
    <td>{user.userId}</td>
    <td>{user.username}</td>
    <td>{user.password}</td>
    <td>{user.email}</td>
   
  </tbody>

  
        )
    }
   </table>
  </div>
   
  )
}

export default DataTable