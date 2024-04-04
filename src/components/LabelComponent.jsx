//to get email id of user to naviagate to users profile


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LabelComponent = () => {

  const [email,setEmail]=useState("");
    const navigator=useNavigate();

    const moveNext=async(email)=>{
      navigator(`/user123/${email}`);
  
  }
  
  return (
    <div className='container'>
     <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">


                        <label for="inputPassword6" class="col-form-label">Enter your Registered email Address</label>   
                            <input placeholder='Please enter registered email of login user'  value={email}  onChange={(e)=>setEmail(e.target.value)}  className="form-control"></input>


                            <button className="btn btn-primary" onClick={()=>moveNext(email)}>Submit</button>

                        </div>
                        <br/>
                        <br/>
                        
</div>
</div>
</div>

  )
}

export default LabelComponent