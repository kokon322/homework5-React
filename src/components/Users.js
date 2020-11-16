import {useState, useEffect} from "react";
import './Users.css'

function Users() {

    const [users, setAllUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const allUsers = await response.json();
        setAllUsers(allUsers);
    }

    const clickOnUser = (user) => {
        console.log(user);
        setAllUsers([])
    }

    return (

        <div className='App'>
            <button className='button' onClick={fetchUsers}>All Users</button>
            <div>
                {users && (
                    <div>{users.map(user =>
                        <h3 key={user.id} onClick={()=>clickOnUser(user)}>
                            {user.name} <hr/>
                        </h3> )}

                    </div>
                )}
            </div>
        </div>
    )
}

export default Users;