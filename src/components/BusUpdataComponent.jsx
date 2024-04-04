//it allows admin to update bus details


import React,{ useEffect,useState } from 'react'
import { getBus, updateBus } from '../services/BusService';
import { useNavigate, useParams } from "react-router-dom";

const BusUpdataComponent = () => {
    const {id}=useParams();
    const navigator=useNavigate();

    const [busName,setBusName] = useState("");
    const [busNumber,setBusNumber] = useState("");
    const [fromDeparture,setFromDeparture] = useState("");
    
    const [toDeparture,setToDeparture] = useState("");
    const [ticketPrice,setTicketPrice] = useState();
    const [noOfSeats,setNoOfSeats] = useState();
    const [busDate,setBusDate] = useState("");


    //Set Bus Inputs updated by get api by id on refresh 
    useEffect(()=>{
        const fetchData=async()=>{
            try {
                if(id){
                const response=await getBus(id);
                const fetch=response.data;
                setBusName(fetch.busName);
                setBusNumber(fetch.busNumber);
                setFromDeparture(fetch.fromDeparture);
                setToDeparture(fetch.toDeparture);
                setTicketPrice(fetch.ticketPrice);
                setNoOfSeats(fetch.noOfSeats);
                setBusDate(fetch.busDate);
   }
   } catch (error) {
   console.error(error);
    } }
   fetchData();
    },[id])
    
 //Update Bus Route by put Api by Id using useState
  const saveBus=async(e)=>{
    e.preventDefault();
        const bus={busName,busNumber,fromDeparture,toDeparture,ticketPrice,noOfSeats,busDate};
        console.log(bus);
        try {
            if(id){
             await updateBus(id,bus);
       
           navigator('/list')
        }}catch (error) {
            console.error(error);
            
        }
    }

 
 

  return (
    <div>
    <div className="offset-lg-3 col-lg-6">
<form className="container" >
    <div className="card">
        <div className="card-header">
            <h1>Update Bus</h1>
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
                        <input value={busNumber} onChange={e => setBusNumber(e.target.value)} className="form-control"></input>
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
                        <input value={busDate} onChange={e => setBusDate(e.target.value)} className="form-control"></input>
                    </div>
                    </div>
                    <div className="card-footer">
            <button type="submit" className="btn btn-primary" onClick={saveBus} >Save</button> |
        
        </div>

</div>
</div>
</div>
</form>
</div>
</div>

  )
}

export default BusUpdataComponent