import React,{useEffect} from 'react';
import { useState } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { getPassenger, updatePassenger } from '../services/PassengerService';

const PassengerUpdateComponent = () => {


    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("female");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [seatNo, setSeatNo] = useState("");

    const {id}=useParams();
    const navigate=useNavigate();



   // By useParams, capture id to GET API BY passenger id  and update Passenger Component
    useEffect(()=>{
        const fetchData=async()=>{
            try {
        
                const response=await getPassenger(id);
                const fetch=response.data;
                setFullName(fetch.fullName);
                setDob(fetch.dob);
                setEmail(fetch.email);
                setGender(fetch.gender);
                setPhoneNumber(fetch.phoneNumber);
                setSeatNo(fetch.seatNo);
     
                
            } catch (error) {
                console.error(error);
                
            }
         }
         fetchData();
    },[id])


    //By update API ,save updated Passenger
    const UpdateUser=async(e)=>{
        e.preventDefault();
        const pass={fullName,dob,email,gender,phoneNumber,seatNo}
        try {
        await updatePassenger(id,pass);
        console.log("updated sucessfully");
        navigate(`/passengers/${id}`);
     } catch (error) {
     console.error(error);
            
        }
    
    }

return (
    <div> <div className="offset-lg-3 col-lg-6">
    <form className="container" >
        <div className="card">
            <div className="card-header">
                <h1>Update Passenger </h1>
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
                            <input value={dob}  placeholder="yyyy-mm-dd" onChange={e => setDob(e.target.value)} type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Seat Preference <span className="errmsg">*</span></label>
                            <input value={seatNo} onChange={e => setSeatNo(e.target.value)} className="form-control"></input>
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
                            <input value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control"></input>
                        </div>
                    </div>
                     <div className="col-lg-6">
                        <div className="form-group">
                            <label>Gender</label>
                            <br></br>
                            <input value={gender} onChange={e => setGender(e.target.value)}  className="form-control"></input>
                            
                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="card-footer">
            <button type="submit" className="btn btn-primary" onClick={(e)=>UpdateUser(e)} >Submit</button> 
               
            </div>
        </div>
    </form>
</div>

</div>
    










    
  )
}

export default PassengerUpdateComponent