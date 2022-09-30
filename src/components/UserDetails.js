import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

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
  return (
    <div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">
            Name:{user.first_name + "  " + user.last_name}
          </h5>

          <p className="card-text">Gender:{user.gender}</p>
          <p className="card-text">ContactNo:{user.ContactNo}</p>

          <p className="card-text">EmailId:{user.email}</p>
          <p className="card-text">ContactNo:{user.ContactNo}</p>
        </div>
      </div>
    </div>
  );
}
