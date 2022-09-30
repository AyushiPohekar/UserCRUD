import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEye, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home({id,user, deletebutton}) {
    
    const navigate=useNavigate();
  return (
    <div className="container">
      <table class="table table-stripped text-center handletable">
        {/* <thead className='handletablehead'>
          <tr>
            <th scope="col">UserId</th>
            <th scope="col">Name</th>
            <th scope="col">EmailId</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.first_name+"  "+user.last_name}</td>
            <td>{user.email}</td>
            <td className="handletableicons">
                <td><FontAwesomeIcon icon={faEye} onClick={()=>navigate(`/users/${id}`)} /></td>
                <td><FontAwesomeIcon icon={faPenToSquare} onClick={() => navigate(`/users/edit/${id}`)}/></td>
                <td>{ deletebutton}</td>
                </td>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}
