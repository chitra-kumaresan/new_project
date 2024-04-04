//it allow users to select from & to destination


import React, { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {getToken  } from '../services/AuthService';
import axios from 'axios';
axios.interceptors.request.use(function (config) {
  config.headers["Authorization"]=getToken();
  return config;
}, function (error) {
  
  return Promise.reject(error);
});



const BusDestinationComponent = () => {


   const navigator=useNavigate();
  
const [buses, setBuses] = useState([]);
  const [fromAndTo, setFromAndTo] = useState({
    from: "",
    to: "",
  });


//Make GET API call to load Bus ROUTES

useEffect(()=>{
       axios.get("http://localhost:8083/api/buses")
       .then((response)=>{
      setBuses(response.data);
      
  
       })
       .catch((error)=>
      {console.error(error)});
},[])


 const handleFilter = (val) => {
    setFromAndTo(val);
  };


 //Filter method to filter from and to destination
  const filteredBuses = buses.filter(
    (bus) =>
      bus.fromDeparture.toLowerCase() === fromAndTo.from.toLowerCase() &&
      bus.toDeparture.toLowerCase() === fromAndTo.to.toLowerCase()
  );

 
 const bookBus=async(id)=>{
  navigator(`/Add Passenger/${id}`);

}
return(
  <div className='container'>
    
<h1 className='text-center'>Choose your Destinations!</h1>
<form>
<div className="col-lg-6">
<div className="form-group">
<label>From<span className="errmsg">*</span></label>
<select type="text" className='form-control' onChange={(e) => handleFilter({ ...fromAndTo,from: e.target.value,})}>
<option value="salem">SALEM</option>
<option value="namakkal">NAMAKKAL</option>
<option value="tiruppur">TIRUPPUR</option>
<option value="karur">KARUR</option>
<option value="dindigul">DINDIGUL</option>
<option value="coimbatore">COIMBATORE</option>
<option value="ooty">OOTY</option>
<option value="erode">ERODE</option>

</select>

<label>TO<span className="errmsg">*</span></label>
<select type="text" className='form-control'  onChange={(e) => handleFilter({ ...fromAndTo, to: e.target.value, })}>
<option value="erode">ERODE</option>
<option value="salem">SALEM</option>
<option value="tiruppur">TIRUPPUR</option>
<option value="ooty">OOTY</option>
<option value="namakkal">NAMAKKAL</option>
<option value="karur">KARUR</option>
<option value="dindigul">DINDIGUL</option>
<option value="coimbatore">COIMBATORE</option>
</select>
</div>
</div>
<br />
 <br />
 <br />
 </form>
 <table className='table table-striped table-bordered'>
<thead>
<tr>
    <th>id</th>
    <th>Bus Name</th>
    <th>Bus Number</th>
    <th>From Departure</th>
    <th>To Departure</th>
    <th>Ticket Price</th>
    <th>No. of Seats</th>
    <th>Date</th>
    <th>Action</th>
</tr>
</thead>
<tbody>{
  filteredBuses.map((d,i)=>(
      <tr key={i}>
        <td>{d.id}</td>
        <td>{d.busName}</td>
        <td>{d.busNumber}</td>
        <td>{d.fromDeparture}</td>
        <td>{d.toDeparture}</td>
        <td>{d.ticketPrice}</td>
        <td>{d.noOfSeats}</td>
        <td>{d.busDate}</td>
        <td>
        <button type="submit" className="btn btn-primary" onClick={()=>bookBus(d.id)}>Book Now</button> 
        </td>

</tr>
 ))}

</tbody>
</table>
</div> 

  )
}

export default BusDestinationComponent;