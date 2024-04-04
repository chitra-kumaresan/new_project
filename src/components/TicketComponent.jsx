//to get ticket by giving registered email

import React, { useState } from 'react';
import { getPassengerByEmail } from '../services/PassengerService';
import { getBookingByEmail } from '../services/BookingService';
import { Link } from 'react-router-dom';

const TicketComponent = () => {


    const [email,setEmail]=useState("");
    const [passengerNames,setPassengerNames]=useState("");
    const [dobs,setDobs] = useState("");
    const [busNames,setBusNames]=useState("");
    const [busNumbers,setBusNumbers] = useState("");
    const [fromDepartures,setFromDepartures] = useState("");
    const [toDepartures,setToDepartures] = useState("");
    const [ticketPrices,setTicketPrices] = useState();
    const [genders,setGenders]=useState("");
    const [Dates,setDates]=useState("");
    const [seatNums,setSeatNums]=useState();


       
    //By GET API by email ,get Passenger & by join columns -get Booking details by GET API OF Booking
    const callData=async()=>{
            try {
                if(email){
                const response=await getPassengerByEmail(email);
                const read=response.data;
                setPassengerNames(read.fullName);
                setDobs(read.dob);
                setGenders(read.gender);
                setSeatNums(read.seatNo);

                if(email){
                    const response=await getBookingByEmail(email);
                    console.log(response.data);
                     const fetch=response.data;
                     const r=fetch.busName;
                     const y=fetch.busNumber;
                     const d=fetch.fromDeparture;
                     const h= fetch.toDeparture;
                     const i=fetch.ticketPrice;
                     const s=fetch.busDate;
                    setBusNames(r);
                    setBusNumbers(y);
                    setFromDepartures(d);
                    setToDepartures(h);
                    setTicketPrices(i);
                    setDates(s);
    }
     } } catch (error) {
     console.error(error); }
        }





      return (
    <div className='container'>

 
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label><h3>Enter your email:</h3> <span className="errmsg"></span></label>
                            <input required  placeholder='Enter passenger email Id' value={email} onChange={(e)=>setEmail(e.target.value)}  className="form-control"></input>

                        </div>
                        </div>
                     <button type="submit" className="btn btn-success mg" onClick={callData} >Submit</button> 
                     <Link to={'/front'} className="btn btn-danger">Download your Ticket</Link> 
                     <Link to={'/front'} className="btn btn-primary">Back</Link>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Passenger Name</b> <span className="errmsg"></span></label>
                            <input value={passengerNames} onChange={e => setPassengerNames(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>

                       <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>D.O.B</b><span className="errmsg"></span></label> 
                            <input value={dobs} onChange={e => setDobs(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Bus Name</b> <span className="errmsg"></span></label>
                            <input value={busNames} onChange={e => setBusNames(e.target.value)} className="form-control"></input>
                        </div>
                

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>BusNumber</b> <span className="errmsg"></span></label>
                            <input value={busNumbers} onChange={e => setBusNumbers(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>From Departure</b><span className="errmsg"></span></label>
                            <input value={fromDepartures} onChange={e => setFromDepartures(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>To Departure</b><span className="errmsg"></span></label>
                            <input value={toDepartures} onChange={e => setToDepartures(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Ticket Fare</b><span className="errmsg"></span></label>
                            <input value={ticketPrices} onChange={e => setTicketPrices(e.target.value)} className="form-control"></input>
                        </div>
                    

</div>
                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Gender</b><span className="errmsg"></span></label>
                            <input value={genders} onChange={e => setGenders(e.target.value)} className="form-control"></input>
                        </div>
                

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Journey Date</b><span className="errmsg"></span></label>
                            <input value={Dates} onChange={e => setDates(e.target.value)} className="form-control"></input>
                        </div>
                

</div>

                    <div className="col-lg-3">
                        <div className="form-group">
                            <label><b>Seat No.</b><span className="errmsg"></span></label>
                            <input value={seatNums} onChange={e => setSeatNums(e.target.value)} className="form-control"></input>
                        
                    </div>

</div>
<p><h2><b>HAPPY JOURNEY!</b></h2></p>

 

</div>
  )
}

export default TicketComponent;