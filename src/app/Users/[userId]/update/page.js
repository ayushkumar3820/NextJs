"use client";
import { useState, useEffect } from "react";  // Correct useEffect import
import "../../../../style.css";

export default function Page({ params }) {
  const id = params.userid;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/user/${id}`);  // Fixed the API URL
    data = await data.json();
    setName(data.result.name);
    setEmail(data.result.email);
    setPassword(data.result.password);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),  
    });

    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  };

  return (
    <div>
      <h1>Update User Details</h1>
      <input
        className="input-field"
        placeholder="Enter name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input-field"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn" onClick={updateUser}>Update User</button> 
    </div>
  );
}
