import React, {useState, useEffect} from "react";
import './Users.css'

function Users() {
    let buttonClassName = 'button'

    const [users, setAllUsers] = useState([]);
    const [dropDownOpen, setDropDownOpen]= useState(false);
    const [buttonName, setButtonName] = useState('All users')

    const fetchUsers = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const allUsers = await response.json();
        setAllUsers(allUsers);
        setDropDownOpen(true);


    }

    const clickOnUser = (user) => {
        console.log(user);
        setDropDownOpen(false)
        setButtonName(user.name)

    }
    return (
        <div>
            <button className={buttonClassName} onClick={fetchUsers}>{buttonName}</button>
            <div>
                {users && dropDownOpen && (
                    <div>{users.map(user =>
                        <h3 key={user.id} onClick={() => clickOnUser(user)}>
                            {user.name}
                            <hr/>
                        </h3>)}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Users;