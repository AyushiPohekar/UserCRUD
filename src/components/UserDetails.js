import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import "./component.css";

export default function UserDetails() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const getUser = () => {
    fetch(`https://62a970daec36bf40bdb78cff.mockapi.io/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((usr) => setUser(usr));
  };
  useEffect(() => getUser(), [id]);
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="Backbutton btn btn-light"
        onClick={() => navigate("/users")}
      >
        <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
        <span>Back</span>
      </button>
      <div className="userdetail">
        <div className="card Userdetailcard">
          <div className="card-body Userdetailbody">
            <p className="card-title Userdetailtitle">
              <div class="row">
                <div class="col-sm-6 Userdetailcontent">Name:</div>
                <div class="col-sm-6 Userdetailinfo">
                  {user.first_name + " " + user.last_name}
                </div>
              </div>
            </p>
            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  Userdetailcontent">Gender:</div>

                <div class="col-sm-6 Userdetailinfo">{user.gender}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  Userdetailcontent">ContactNo:</div>

                <div class="col-sm-6 Userdetailinfo">{user.ContactNo}</div>
              </div>
            </p>

            <p className="card-text">
              <div class="row">
                <div class="col-sm-6  Userdetailcontent">EmailId:</div>

                <div class="col-sm-6 Userdetailinfo">{user.email}</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
