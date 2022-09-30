import React from "react";
import "./component.css";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  upperbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            User CRUD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/users")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => navigate("/users/add")}
                >
                  AddUser
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
Table_head();

function Table_head() {
  return (
    <thead className="handletablehead">
      <tr>
        <th scope="col">UserId</th>
        <th scope="col">Name</th>
        <th scope="col">EmailId</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
  );
}
