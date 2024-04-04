//to update password to user 

import React,{useEffect, useState}  from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import { getByName,passwordChange } from '../services/AuthService';

const UserComponent = () => {
   const {username}=useParams();
   const navigate=useNavigate();
 const[oldPassword,setOldPassword]=useState("");
 const[newPassword,setNewPassword]=useState("");
 


 //by useeffect, GET API by username,get user details and  set the user component 
 useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await getByName(username)//API call to get bus by username
        const user = response.data;
        setOldPassword(user.password);     
} catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [username]);



//save updated user using POST API
const savePassword=async(e)=>{
    e.preventDefault();
    const updated={username,oldPassword,newPassword};
    try {
        if(username){
           
            await passwordChange(updated)
           alert("updated successfully");
            navigate("/success");
        }
    } catch (error) {
        console.error(error);
    }}



return (
    <div>
 <div className="offset-lg-3 col-lg-6">
        <div className="card">
            <div className="card-header">
           <p>Update New Password</p>
            </div>
            
            <div className="card-body">

                
                        <div className="col-lg-6">
                        <div className="form-group">

                            <label>Password <span className="errmsg">*</span></label>

                            <input required type='password' value={oldPassword}  onChange={e => setOldPassword(e.target.value)} className="form-control"></input>
                            <br/>
                            {/* give New Password */}

                        <input type="text" required  value={newPassword} placeholder="Enter new password" onChange={e => setNewPassword(e.target.value)}
                        className="form-control"></input>
                           </div>

<div className="card-footer">
<button type="submit" className="btn btn-primary" onClick={(e)=>savePassword(e)} >Submit</button> 
</div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default UserComponent;