async function getUsers(id){
    const response = await fetch(`  http://localhost:3000/api/user/${id}`);
    const data = await response.json();
    return data;
}




export async function page(params) {
    const user=await    getUsers (params.userid)
    console.log(user);
    return (
        <div>
            <h1>User details page</h1>
            <h2> Name: {user.name}</h2>
            <h4>email: {user.email}</h4>
            <h4>password: {user.password}</h4>
            <h4>id: {user.id}</h4>
        </div>
    )
}