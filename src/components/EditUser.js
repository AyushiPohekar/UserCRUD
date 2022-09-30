import { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useEffect } from 'react';

export default function EditUser() {
  const { id } = useParams();

  const [user, setuser] = useState(null);

  const getUser=()=>{fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${id}`,{
    method:"GET",
  })
  .then((data)=>data.json())
  .then((ur)=>setuser(ur));
  };
  useEffect(()=>getUser(),[]);
  return user?<EditUserform user={user}/>:"Loading...";
}

function EditUserform({user})
{
   const [first_name,setfirst_name]=useState(user.first_name);
  const [last_name,setlast_name]=useState(user.last_name);
  const [email,setemail]=useState(user.email)
  const [ContactNo,setContactNo]=useState(user.ContactNo);
  const [gender,setgender]=useState(user.gender)

  const navigate = useNavigate();
  const edituser = () => {
    const updateduser = {
      first_name:first_name,
      last_name:last_name,
      email:email,
      ContactNo:ContactNo,
      gender:gender
    };

    

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updateduser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/users"));
     
  };

return(
 
    <form>
 <div className="form-group">
    <label htmlfor="firstName">FirstName:</label>
    <input type='text' id='firstName' value={first_name} onChange={(event) => setfirst_name(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="lastName">LasttName:</label>
    <input type='text' id='lastName' value={last_name} onChange={(event) => setlast_name(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="ContactNo">ContactNo:</label>
    <input type='text' id='ContactNo' value={ContactNo} onChange={(event) => setContactNo(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="email">email</label>
    <input type='text' id='email' value={email} onChange={(event) => setemail(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="gender">gender:</label>
    <input type='text' id='gender' value={gender} onChange={(event) => setgender(event.target.value)}/>
  </div>




<button type="button" onClick={edituser} className="btn btn-success">Save</button>
</form>
)
}


