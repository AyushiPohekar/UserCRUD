import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
import "./component.css";

export default function Home({ id, user, deletebutton }) {
  const navigate = useNavigate();
  return (
    <div class="container Home">
      <div class="row Homerow">
        <div class="col-sm">
          {" "}
          {user.id + ":"}
          <span className="name">
            {user.first_name + "  " + user.last_name}
          </span>
        </div>
        <div class="col-sm">{user.email}</div>
        <div class="col-sm Homebuttons">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => navigate(`/users/${id}`)}
          >
            View <FontAwesomeIcon icon={faEye} />
          </button>

          <button
            type="button"
            class="btn btn-success"
            onClick={() => navigate(`/users/edit/${id}`)}
          >
            Edit <FontAwesomeIcon icon={faPenToSquare} />
          </button>

          {deletebutton}
        </div>
      </div>
    </div>
  );
}
