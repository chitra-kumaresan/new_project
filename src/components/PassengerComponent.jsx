//it display passenger component and calculate total fare of booking made by user and navigate to payment page



import React from 'react'
import {useEffect, useState } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import { createPassenger } from '../services/PassengerService';
import { getBus } from '../services/BusService';
import { createBooking } from '../services/BookingService';


const PassengerComponent = () => {
    const {id}=useParams();
    
       

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("female");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [seatNo, setSeatNo] = useState("");
  const[count,setCount]=useState(1);
 const [money,setMoney]=useState("");
  const[page,setPage]=useState("");
  const [busName,setBusName] = useState("");
const [busNumber,setBusNumber] = useState("");
const [fromDeparture,setFromDeparture] = useState("");
const [toDeparture,setToDeparture] = useState("");
 const [ticketPrice,setTicketPrice] = useState();
const [busDate,setBusDate] = useState("");
    


    
let today = new Date().toISOString().slice(0, 10);
const [bookingDate, setDate] = useState("");





useEffect(() => {
        const fetchData1 = async () => {
          try {
        
            const response = await getBus(id); //API call to get bus by Id
            const bus = response.data;
            const n = bus.busName;
            const p=bus.busNumber;
            const w=bus.fromDeparture;
            const y=bus.toDeparture;
            const z=bus.ticketPrice;
            const a=bus.busDate;
            setBusName(n);
            setBusNumber(p);
            setFromDeparture(w);
            setToDeparture(y);
            setTicketPrice(z);
            setBusDate(a);
           
            setDate(today);
    
           } catch (error) {
            console.error(error);
          }
        };
        fetchData1();
      }, [id]);

   const navigate = useNavigate();
  function updatePassenger(e){
    e.preventDefault();
    
      navigate(`/passengers/${page.id}`);
    }

  

    //Add passenger by POST API 
  const addPassenger=async(e)=>{
    e.preventDefault();
    const passenger={fullName,dob,email,gender,phoneNumber,seatNo};
    console.log(passenger);
    createPassenger(passenger).then((response)=>{
      console.log(response.data);
     setPage(response.data);
     setFullName("");
          setDob("");
          setEmail("");
          setGender("");
          setPhoneNumber("");
          setSeatNo(0);
        

    }) 
    const passenger_id={fullName,dob,email,gender,phoneNumber,seatNo};
     const booking={busName,busNumber,fromDeparture,toDeparture,ticketPrice, busDate,bookingDate,passenger_id,email};
       console.log(booking);
       
       const response = await createBooking(booking).then((response)=>{
        console.log(response.data);
       })
       //set the count, to add Number of Passenger
     setCount(count+1);
    console.log(count);
  }


   
  //By GET API By id -to get Price details of bus - to calculate Total Fare
  const fetchData=async(e)=>{
    try {
    e.preventDefault();
    const response=await getBus(id);
    const fetch=response.data;
    console.log(fetch);
    const price=fetch.ticketPrice;
    const totalPrice=(count-1)*price;
        
    setMoney(totalPrice);
    console.log(money);
} catch (error) {
console.error(error);
                
}
}
         
        
return (
    <div> <div className="offset-lg-3 col-lg-6">
      <form className="container" >
        
        <div className="card">
            <div className="card-header">
                <h1>Add Passenger Details {count}</h1>
            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Full Name <span className="errmsg">*</span></label>
                            <input value={fullName} onChange={e => setFullName(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Passenger DOB. <span className="errmsg">*</span></label>
                            <input  type="date"  value={dob}  onChange={e => setDob(e.target.value)} className="form-control"></input>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email <span className="errmsg">*</span></label>
                            <input value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                        </div>

                    </div>
                    
            
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Phone <span className="errmsg"></span></label>
                            <input  placeholder="987654321" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                    
            <div className="col-lg-6">
                        <div className="form-group">
                            <label>Seat Preference <span className="errmsg">*</span></label>
                            <input value={seatNo} onChange={e => setSeatNo(e.target.value)} className="form-control"></input>
                        </div>
            <div className='griddesign'>
                          <div><div><div>
<button  id='st1' >seat1</button>
<button>seat2</button>
<button>seat5</button>
<button>seat6</button>
<button>seat9</button>
<button>sea10</button>
<button>sea13</button>
<button>sea14</button>
</div></div>

<button>sea17</button>
<button>sea18</button>
<button>sea21</button>
<button>sea22</button>
<button>sea25</button>
<button>sea26</button>

 </div>
 <div>
<button>seat3</button>
<button>seat4</button>
<button>seat7</button>
<button>seat8</button>
<button>sea11</button>
<button>sea12</button>
<button>sea15</button>
<button>sea16</button>
<button>sea19</button>
<button>sea20</button>
<button>sea23</button>
<button>sea24</button>
<button>sea27</button>
<button>sea28</button>
                   </div>
                          
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Gender</label>
                            <br></br>
                            <input type="radio" checked={gender === 'male'} onChange={e => setGender(e.target.value)} name="gender" value="male" className="app-check"></input>
                            <label>Male</label>
                            <input type="radio" checked={gender === 'female'} onChange={e => setGender(e.target.value)} name="gender" value="female" className="app-check"></input>
                            <label>Female</label>
                        </div>
                    </div>

                </div>

            </div>
                    
                       
                     
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" onClick={addPassenger}>Add Passenger</button> 

              <button type="submit" className="btn btn-primary" onClick={fetchData}>Total Fare</button>
              <input value={money} ></input> 
              
                <button type="submit" className="btn btn-primary" onClick={updatePassenger}>Update Passenger</button> 
                
                

                <Link to={"/success"} className="btn btn-danger" >Payment</Link>
            </div>
        </div>
    </form>
</div>

</div>
  )
}

export default PassengerComponent;