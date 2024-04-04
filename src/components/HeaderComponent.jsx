//Header component 


import React from 'react'
import { useNavigate } from 'react-router-dom'
import { isAdminUser, isLoggedInUser, logout } from '../services/AuthService';


const HeaderComponent = () => {

  const isAuth=isLoggedInUser();

  const isAdmin=isAdminUser();
  const navigate=useNavigate();

  const handleLogout=()=>{
    logout();
    navigate("/front");
  }

 //using isAuth and isAdmin ,display and hide Header Components ,during (Log in / Log out/Admin/User )
  return (
    
    <div>   
<nav class="navbar navbar-light bg-light">

<a class="navbar-brand" href="#"><h2>##@Welcome to Blue Bus Online Ticket Booking @##</h2></a>
    
{isAuth && (
<button type="button" className="btn btn-warning btn-lg" onClick={handleLogout}>Logout</button>)}

</nav>


<nav class="navbar navbar-dark bg-primary"> 
<a className="nav-link active" aria-current="page" href="https://www.google.com/search?sca_esv=8be3a0dab30d8c4d&sxsrf=ACQVn08E2OcUyDMPVQatfPv6ceE4p60bJA:1711776475663&q=bus+travels+abhibus+bus&uds=AMwkrPuKiz3kd7jHuta4ar-HNLVt54s52TzlQ837U8dQCvhe9hs6QrY23u8249AAORDJrQrIoYxXzmB7V6g98SPemC87Xhqpo9nncXtDiAbYQZV2XlqUD45i92TO1DAB8l_9Z6qxGq_XpoAqjpuyhK6hti8MupkgYZa4t16hl_3dL4DNI1j07NLv9qLDEqkA-S-1E1r23rjXgLlITNQAHTytVImlEmdh6OhEs2hug47EY68Az68a-kbLw1kZrau2LVsM4w8NZKkEC5gdvVA9vuhV7For05LBBMJLB9DDu8FwfV9E17XrJd-Zr1hvnWCL5udwvncAz3m-&udm=2&prmd=ivsmnbtz&sa=X&ved=2ahUKEwi68pCmoJuFAxXFZ2wGHchqBHEQtKgLegQIEBAB&biw=1536&bih=703&dpr=1.25"><h5>Home</h5></a>

{!isAuth  && (
<a className="nav-link" href="http://localhost:3000/reg"><h5>SignUp</h5> </a>)}

{!isAuth  && (
<a className="nav-link" href="http://localhost:3000/login"><h5>Login</h5> </a>)}

{!isAuth && (
<a className="nav-link" href="http://localhost:3000/reg"><h5>Booking App</h5> </a>)} 

{isAuth && !isAdmin && (
<a className="nav-link btn btn-success" href="http://localhost:3000/tic"><h5>Download E-ticket</h5></a>)}

{isAuth && !isAdmin && (
<a className="nav-link btn btn-danger" href="http://localhost:3000/label"><h5>My Profile</h5> </a>)}

{isAuth && !isAdmin && (
<a className="nav-link  btn btn-warning " href="http://localhost:3000/my"><h5>Booking History</h5> </a>)}

 
          
{isAuth && isAdmin && (
<a className="nav-link" href="http://localhost:3000/suc"><h5>Assign Routes</h5></a>)}
       
{isAuth && isAdmin && (
<a className="nav-link " href="http://localhost:3000/list" id="navbarDropdownMenuLink" role="button"><h5>Bus List</h5></a>)}
       
       
{isAuth && isAdmin && (
<a className="nav-link" href="http://localhost:3000/booking"><h5>Booking Record</h5></a>)}
       
{isAuth && isAdmin && (
<a className="nav-link" href="http://localhost:3000/hello"><h5>Users Profile</h5></a>)}

</nav>
</div>

  )
}

export default HeaderComponent;