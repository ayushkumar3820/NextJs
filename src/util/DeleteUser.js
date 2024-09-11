"use client";
export default function DeleteUser(props) {
  const userId = props.id;
  console.log(userId);
  const deletedUser = async () => {
    let result = await fetch("http://localhost:3000/api/user" + userId, {
      method: "delete",
    });
    result = await result.json();
    if (result.success) {
      alert("user are delete successfully");
    }
  };
  return <button onClick={deletedUser}>Delete</button>;
}
