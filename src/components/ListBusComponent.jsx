//it list the bus details  and allow admin to update or delete bus details


import React, { useEffect, useState } from 'react';
import { deleteBus, listBuses } from '../services/BusService';
import {Link, useNavigate } from 'react-router-dom';

const ListBusComponent = () => {
const [buss,setBuss]=useState([]);
const navigator=useNavigate();



//Auto-load Bus Routes by GET All API by Useeffect
 useEffect(()=>{
    listBuses().then((response)=>{
        setBuss(response.data);
        console.log(response.data);
    }).catch(error=>{
        console.error(error);
    })
 },[])


 const updateBus=async(id)=>{
    navigator(`/update-bus/${id}`);

}
//Delete BUS Route by delete API by Id
const deleteExistBus=async(id)=>{
    try {
      await deleteBus(id);
       alert("deleted successfully on refresh");
        listBuses();
        
    } catch (error) {
        console.error(error);
   }
}
 
    
return (
    <div className='container'>
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Bus id </th>
<th>Bus Name</th>
<th>Bus Number </th>
<th>From Departure</th>
<th>To Departure </th>
<th>Ticket Price</th>
<th>No Of Seats </th>
<th>Date </th>
<th>Action</th>
</tr>
</thead>
<tbody>{
    buss.map(bus=>                                                             
        <tr key={bus.id}>
        <td>{bus.id}</td>
        <td>{bus.busName}</td>
        <td>{bus.busNumber}</td>
        <td>{bus.fromDeparture}</td>
        <td>{bus.toDeparture}</td>
        <td>{bus.ticketPrice}</td>
         <td>{bus.noOfSeats}</td>
         <td>{bus.busDate}</td>
         <td>
<button className="btn btn-primary" onClick={()=>updateBus(bus.id)}>Update</button>
<div class="vr"></div>

<button className="btn btn-danger" style={{marginLeft:"10px"}} onClick={()=>deleteExistBus(bus.id)}>Delete</button>

</td>
</tr>)}
</tbody>
</table>
<Link to={'/admin'} className="btn btn-primary float-right">Back</Link> 
</div>
)
}

export default ListBusComponent;