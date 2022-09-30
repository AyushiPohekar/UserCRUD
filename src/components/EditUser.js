import { useState } from "react";
import "./component.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

export default function EditUser() {
  const { id } = useParams();

  const [user, setuser] = useState(null);

  const getUser = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ur) => setuser(ur));
  };
  useEffect(() => getUser(), []);
  return user ? <EditUserform user={user} /> : "Loading...";
}

function EditUserform({ user }) {
  const [first_name, setfirst_name] = useState(user.first_name);
  const [last_name, setlast_name] = useState(user.last_name);
  const [email, setemail] = useState(user.email);
  const [ContactNo, setContactNo] = useState(user.ContactNo);
  const [gender, setgender] = useState(user.gender);

  const navigate = useNavigate();
  const edituser = () => {
    const updateduser = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      ContactNo: ContactNo,
      gender: gender,
    };

    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updateduser),
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
          <div class="col-sm-4">
            <input
              type="text"
              id="firstName"
              value={first_name}
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
              value={last_name}
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
              value={ContactNo}
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
              value={email}
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
              value={gender}
              onChange={(event) => setgender(event.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <div className="buttonAdd">
              <button
                type="button"
                onClick={edituser}
                className="btn btn-success Addbutton "
              >
                Apply-Changes
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
