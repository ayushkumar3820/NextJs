import Link from "next/link";
import {style} from "../../style.css"; // Assuming you're using CSS modules
import DeleteUser from "@/util/DeleteUser";
async function getUsers() {
    const response = await fetch('http://localhost:3000/api/user');
    const data = await response.json();
    return data;
  }
  
  export default async function Page() {
    const users = await getUsers();
    console.log(users);
  
    return (
      <div>
        <h1>User List</h1>
        {users.map((item) => (
          <div key={item.id} className="user-item">
            <span>
              <Link href={`/users/${item.id}`}>{item.name}</Link>
            </span>
            <span>
              <Link href={`/users/${item.id}/update`}>EDIT</Link>
            </span>
            <DeleteUser id={item.id}></DeleteUser>
          </div>
        ))}
      </div>
    );
  }