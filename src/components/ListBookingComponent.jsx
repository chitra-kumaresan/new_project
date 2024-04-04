//it display booking details of users for admin purpose

import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom';
import { listBookings } from '../services/BookingService';


const ListBookingComponent = () => {
    const [bookings,setBookings] =useState([]);

//Auto-load Booking Details by GET All API to ADMIN Purpose using useState
    useEffect(()=>{
        
        listBookings().then((response)=>{
            setBookings(response.data);

        }).catch(error=>{
            console.error(error)})
    },[])

   return (
<div className='container'>
<h1 className='text-center'>List of Bookings</h1>
<table className='table table-striped table-bordered'>
<thead>
<tr>
    <th>Booking id</th>
    <th>Booking Date</th>
    <th>Bus Name</th>
    <th>Bus Number</th>
    <th>From Location</th>
    <th>To Location</th>
    <th>Passenger Email</th>
    <th>Ticket Fare</th>
</tr>
</thead>
<tbody>{
    bookings.map(bookings=>
      <tr key={bookings.id}>
        <td>{bookings.id}</td>
        <td>{bookings.bookingDate}</td>
        <td>{bookings.busName}</td>
        <td>{bookings.busNumber}</td>
        <td>{bookings.fromDeparture}</td>
        <td>{bookings.toDeparture}</td>
        <td>{bookings.email}</td>
        <td>{bookings.ticketPrice}</td>

</tr>
 )}

</tbody>
</table>
<Link to={'/admin'} className="btn btn-danger">Back</Link> 
    </div>
  )}


export default ListBookingComponent;