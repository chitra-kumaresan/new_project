// to add bus component by admin

import React from 'react';
import { useState } from "react";
import { createBus } from '../services/BusService';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BusComponent = () => {

    const [busName,setBusName] = useState("");
    const [busNumber,setBusNumber] = useState("");
    const [fromDeparture,setFromDeparture] = useState("");
    const [toDeparture,setToDeparture] = useState("");
    const [ticketPrice,setTicketPrice] = useState();
    const [noOfSeats,setNoOfSeats] = useState();
    const [busDate,setBusDate] = useState("");
   
  //Make API call to POST Bus Details from Bus Inputs by Admin
    function saveBuses(e){
    e.preventDefault();
        const buses={busName,busNumber,fromDeparture,toDeparture,ticketPrice,noOfSeats,busDate};
        console.log(buses);
        createBus(buses).then((response)=>{
          console.log(response.data);
          alert('Bus registered successfully');
          setBusName("");
          setBusNumber("");
          setFromDeparture("");
           setToDeparture("");
          setTicketPrice(0);
          setNoOfSeats(0);
          setBusDate("");

 })
    }


  return (
    <div>
        <div className="offset-lg-3 col-lg-6">
    <form className="container" >
        <div className="card">
            <div className="card-header">
                <h1>Bus Details</h1>
            </div>
            <div className="card-body">

                <div className="row">
                <div className="col-lg-6">
                        <div className="form-group">
                            <label>Bus Name <span className="errmsg">*</span></label>
                            <input value={busName} onChange={e => setBusName(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Bus Number <span className="errmsg">*</span></label>
                            <input  placeholder='TN 12 3456' value={busNumber} onChange={e => setBusNumber(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>From Departure<span className="errmsg">*</span></label>
                            <input value={fromDeparture} onChange={e => setFromDeparture(e.target.value)} type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>To Departure<span className="errmsg">*</span></label>
                            <input value={toDeparture} onChange={e => setToDeparture(e.target.value)} className="form-control"></input>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Ticket Price<span className="errmsg">*</span></label>
                            <input value={ticketPrice} onChange={e => setTicketPrice(e.target.value)} className="form-control"></input>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Number of seats<span className="errmsg">*</span></label>
                            <input value={noOfSeats} onChange={e => setNoOfSeats(e.target.value)} className="form-control"></input>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label>Date<span className="errmsg">*</span></label>
                            <input type="date"  value={busDate} onChange={e => setBusDate(e.target.value)} className="form-control"></input> 
                       
                           </div>
                           </div>
                        <div className="card-footer">
                <button type="submit" className="btn btn-primary" onClick={saveBuses} >Add Bus</button> |
                 <Link to={'/admin'} className="btn btn-danger">Back</Link> 
            </div>

    </div>
    </div>
    </div>
    </form>
    </div>
    </div>
   
  )
}

export default BusComponent;
