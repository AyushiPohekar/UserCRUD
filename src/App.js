import Home from "./components/Home";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import Welcome from "./components/Welcome";
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Switch,
  Navigate,
} from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/users/:id" element={<UserDetails />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="users/edit/:id" element={<EditUser />}></Route>
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/404" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
