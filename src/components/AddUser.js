import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const [first_name,setfirst_name]=useState('');
  const [last_name,setlast_name]=useState('');
  const [email,setemail]=useState('')
  const [ContactNo,setContactNo]=useState('');
  const [gender,setgender]=useState('');

  const [userlist, setUserlist] = useState([]);
  const navigate = useNavigate();

  const adduser = () => {
    const newuser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      ContactNo: ContactNo,
      gender: gender,
    
    };
    setUserlist([...userlist, newuser]);

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users`, {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/users"));
  };

  return (
    <div className='container'>
      <div className="form-group">
    <label htmlfor="firstName">FirstName:</label>
    <input type='text' id='firstName'  onChange={(event) => setfirst_name(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="lastName">LasttName:</label>
    <input type='text' id='lastName' onChange={(event) => setlast_name(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="ContactNo">ContactNo:</label>
    <input type='text' id='ContactNo'  onChange={(event) => setContactNo(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="email">email</label>
    <input type='text' id='email' onChange={(event) => setemail(event.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlfor="gender">gender:</label>
    <input type='text' id='gender'  onChange={(event) => setgender(event.target.value)}/>
  </div>




<button type="button" onClick={adduser} className="btn btn-primary">AddUser</button>

    </div>
  )
}
