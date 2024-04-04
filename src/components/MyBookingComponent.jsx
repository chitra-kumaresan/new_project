//it show booking details of a user by giving passenger email


import React,{useState} from 'react';
import { getPassengerByEmail } from '../services/PassengerService';
import { getBookingByEmail } from '../services/BookingService';
import { Link } from 'react-router-dom';

const MyBookingComponent = () => {
    const [email,setEmail]=useState("");
    const [passengerNames,setPassengerNames]=useState("");
    const [id,setId]=useState("");
    const [busNames,setBusNames]=useState("");
    const [busNumbers,setBusNumbers] = useState("");
    const [fromDepartures,setFromDepartures] = useState("");
    const [toDepartures,setToDepartures] = useState("");
    const [ticketPrices,setTicketPrices] = useState("");
    const [Dates,setDates]=useState("");
    const[bookings,setBooking]=useState("");




    //By GET API by Email,  get Passenger Details and by join columns ,using Passenger email get the Booking Details by GET API (by email)
    const callData=async()=>{
        try {
            if(email){
            const response=await getPassengerByEmail(email);
            const fetch1=response.data;
            
            if(email){
            await getBookingByEmail(email).then((response)=>{
           
            const fetch=response.data;
            setId(fetch.id);
            setBusNames(fetch.busName);
            setBusNumbers(fetch.busNumber);
            setFromDepartures(fetch.fromDeparture);
            setPassengerNames(fetch1.fullName);
            setToDepartures(fetch.toDeparture);
            setTicketPrices(fetch.ticketPrice);
            setDates(fetch.busDate);
            setBooking(fetch.bookingDate);
        })
            }}
        }catch(error){
        console.error(error)};
 }



  return (
  
<div className='container'>

<nav class=" bg-warning">
<p><h4>View your Booking History</h4></p>
</nav>


                        <div className="form-group">

                            <label><h3>Enter your email:</h3> <span className="errmsg"></span></label>
                            <input placeholder='Enter Passenger Email'required value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control"></input>

                        </div>
                    
                    

                     <button type="submit" className="btn btn-success btn-md float-center" onClick={callData} >Submit</button> 
                     <Link to={'/front'} className="btn btn-danger">Back</Link> 

                    
                    
                       <div className="col-lg-3">
                
                            <label ><b>Booking Id.</b><span className="errmsg"></span></label> 
                            <input value={id} onChange={e => setId(e.target.value)} className="form-control"></input>
                        </div>




                    <div className="col-lg-3">
                       
                            <label><b>Bus Name</b> <span className="errmsg"></span></label>
                            <input value={busNames} onChange={e => setBusNames(e.target.value)} className="form-control"></input>
                    </div>
                   

                    <div className="col-lg-3">
                        
                            <label><b>BusNumber</b> <span className="errmsg"></span></label>
                            <input value={busNumbers} onChange={e => setBusNumbers(e.target.value)} className="form-control"></input>
                    
                    </div>

                    <div className="col-lg-3">
                       
                            <label><b>From Departure</b><span className="errmsg"></span></label>
                            <input value={fromDepartures} onChange={e => setFromDepartures(e.target.value)} className="form-control"></input>
                    </div>



                    <div className="col-lg-3">
                        
                            <label><b>To Departure</b><span className="errmsg"></span></label>
                            <input value={toDepartures} onChange={e => setToDepartures(e.target.value)} className="form-control"></input>
                    </div>



                     
                    <div className="col-lg-3">
                    
                            <label><b>Passenger Name</b> <span className="errmsg"></span></label>
                            <input value={passengerNames} onChange={e => setPassengerNames(e.target.value)} className="form-control"></input>
                        
                    </div>



                    <div className="col-lg-3">
                    
                            <label><b>Booking Date</b><span className="errmsg"></span></label>
                            <input value={bookings} onChange={e => setBooking(e.target.value)} className="form-control"></input>
                        
                    </div>


                    <div className="col-lg-3">
                        
                            <label><b>Journey Date</b><span className="errmsg"></span></label>
                            <input value={Dates} onChange={e => setDates(e.target.value)} className="form-control"></input>
                    
                    </div>


                    <div className="col-lg-3">
                        
                            <label><b>Ticket Fare</b><span className="errmsg"></span></label>
                            <input value={ticketPrices} onChange={e => setTicketPrices(e.target.value)} className="form-control"></input>
                        </div>
                    </div>

  )
}

export default MyBookingComponent;