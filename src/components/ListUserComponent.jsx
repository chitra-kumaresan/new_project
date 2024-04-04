//it list the users detail for admin purpose


import React, { useEffect, useState } from 'react';
import {Link } from "react-router-dom";
import { getAllUser } from '../services/AuthService';


const ListUserComponent = () => {

const [users,setUsers]=useState([]);


//Auto-Load UsersList by useeffect by GET All API 
useEffect(()=>{ListUsers();},[]);

const ListUsers=async()=>{
try {
const response= await getAllUser();
setUsers(response.data);
        
} catch (error) {
console.error(error);
}
}



return (
        <div className='container'>
        <h1 className='text-center'>Users Profile List</h1>

    
        <table className='table table-striped table-bordered'>
        <thead>
        <tr>
    <th>User id</th>
    <th>name</th>
    <th>Username</th>
    <th>Password</th>
    <th>Registered Email</th>
    
     </tr>

    </thead>
<tbody>{
   users.map(stranger=>
      <tr key={stranger.id}>
        <td>{stranger.id}</td>
        <td>{stranger.name}</td>
        <td>{stranger.username}</td>
        <td>{stranger.password}</td>
        <td>{stranger.email}</td>
</tr>
 )}

</tbody>
</table>
<Link to={'/admin'} className="btn btn-primary float-right">Back</Link> 
    </div>
  )
}

export default ListUserComponent;
