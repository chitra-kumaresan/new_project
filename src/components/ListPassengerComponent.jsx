//it display the booked  passenger detail  & allow user to update passenger detail given by user



import React,{useEffect, useState} from 'react'
import { getPassenger} from '../services/PassengerService';
import { useNavigate, useParams } from 'react-router-dom';

const ListPassengerComponent = () => {

    const[passengers,setPassengers]=useState([]);
    const navigate=useNavigate();
    const {id}=useParams();



    //Auto-Load Passenger List by useeffect by GET API by id for Admin Purpose
useEffect(()=>{
const fetchData=async()=>{
try {
const response=await getPassenger(id);

const passenger=response.data;
console.log(passenger);
setPassengers(passenger);
}catch(error){
console.error(error);
}
}
fetchData();
},[])



const moveBack=async(id)=>{
navigate(`/Add Passenger/${id}`);

}

const updatePassenger=async(id)=>{
navigate(`/passupdate/${id}`);
}


return (
<div className='container'>
<h1 className='text-center'>Passenger Detail</h1>
<table className='table table-striped table-bordered'>
<thead>
<tr>
<th>Passenger Id</th>
<th>Full Name</th>
<th>Passenger Dob</th>
<th>Email</th>
<th>Gender</th>
<th>Phone Number</th>
<th>Seat No</th>
</tr>

</thead>
<tbody>{
    
<tr key={passengers.id}>
<td>{passengers.id}</td>
<td>{passengers.fullName}</td>
<td>{passengers.dob}</td>
<td>{passengers.email}</td>
<td>{passengers.gender}</td>
<td>{passengers.phoneNumber}</td>
<td>{passengers.seatNo}</td>
<button className="btn btn-primary" onClick={()=>updatePassenger(passengers.id)}>Update</button>

<button className="btn btn-primary" onClick={()=>moveBack(passengers.id)}>Back</button>

</tr>
}            
</tbody>
</table>
</div>
)}

export default ListPassengerComponent;