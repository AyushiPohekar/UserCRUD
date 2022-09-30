import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./component.css";

export default function AddUser() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [gender, setgender] = useState("");

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
    <div>
      <button
        className="Backbutton btn btn-light"
        onClick={() => navigate("/users")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="container Adduser">
        <div class="row AdduserInfo">
          <div class="col-sm-4 ">
            <label htmlfor="firstName" className="Adduserlabel">
              FirstName:
            </label>
          </div>
          <div class="col-sm-4 input">
            <input
              type="text"
              id="firstName"
              onChange={(event) => setfirst_name(event.target.value)}
            />
          </div>
        </div>

        <div class="row AdduserInfo">
          <div class="col-sm-4 ">
            <label htmlfor="lastName" className="Adduserlabel">
              LastName:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="lastName"
              onChange={(event) => setlast_name(event.target.value)}
            />
          </div>
        </div>
        <div class="row AdduserInfo">
          <div class="col-sm-4 ">
            <label htmlfor="ContactNo" className="Adduserlabel">
              ContactNo:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="ContactNo"
              onChange={(event) => setContactNo(event.target.value)}
            />
          </div>
        </div>
        <div class="row AdduserInfo">
          <div class="col-sm-4 ">
            <label htmlfor="email" className="Adduserlabel">
              email
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="email"
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
        </div>

        <div class="row AdduserInfo">
          <div class="col-sm-4 ">
            <label htmlfor="gender" className="Adduserlabel">
              Gender:
            </label>
          </div>
          <div class="col-sm-4">
            <input
              type="text"
              id="gender"
              onChange={(event) => setgender(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={adduser}
                className="btn btn-primary Addbutton "
              >
                AddUser
              </button>
            </div>
          </div>
          {/* <div className='buttonAdd'>
      <button type="button" onClick={adduser} className="btn btn-primary Addbutton " >AddUser</button>
      </div> */}
        </div>
      </div>
    </div>
  );
}
