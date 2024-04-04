//to display user profile by capturing email of registered user through useParams



import React, {
	useEffect,
	useState,
} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { getUser } from "../services/AuthService";

const UserProfileComponent   = () => {
	const [name, setName] = useState("");
	const [id, setId] = useState();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const {email } = useParams();
    const navigate=useNavigate();

   
	
	
	//by useeffect ,getuser detail by email by use Params 
	useEffect(()=>{
	const fetchData=async()=>{
		try {
	
			const response=await getUser(email);
			const fetch=response.data;
			setId(fetch.id);
			setName(fetch.name);
			setUsername(fetch.username);
			setPassword(fetch.password);
		    console.log(name);
 
			
		} catch (error) {
			console.error(error);
			}}
	 fetchData();
},[email])

//to navigate to next page to update Password
 const handlePass=async(username)=>{
	navigate(`/change-password/${username}`);
 }

	
return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{name}
								</h5>
								
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    Username 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
										{username}
										</p>
									</div>
								</div>

								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    Password
										</h5>
									</div>
							
									<div className="col-md-9">
                      <input
                        type="password"
                        name="password"
                
                        className="form-control"
                        placeholder="Enter your Password"
                        value={password}
                
                        required
                      />
										
									</div>
								</div>
								<hr />

								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
                    email id 
										</h5>
									</div>

									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{email}
										</p>
									</div>
								</div>
								<hr />

								<button type="submit" className="btn btn-primary" onClick={()=>handlePass(username)}>Change Password</button>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

 

export default UserProfileComponent;