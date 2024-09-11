"use client"
import { useState } from "react";
import { style } from '../../style.css'

export default function Page() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const addUser = async () => {
        try {
            let response = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password })
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            if (data.success) {
                alert("User has been added");
            } else {
                alert("There was an error in the API");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred while adding the user");
        }
    }

    return (
        <div className="add-user">
            <input 
                type="text" 
                value={name} 
                placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)} 
                className="input-field"
            />
            <input 
                type="email" 
                value={email} 
                placeholder="Enter email" 
                onChange={(e) => setEmail(e.target.value)} 
                className="input-field"
            />
            <input 
                type="password" 
                value={password} 
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)} 
                className="input-field"
            />
            <button onClick={addUser} className="btn">Add User</button>
        </div>
    )
}