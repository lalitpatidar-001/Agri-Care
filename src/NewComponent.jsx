import { useEffect, useState } from "react";
import axios from 'axios';
import React from "react";

function NewComponent() {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        loadUsers();
    },[]);

    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:8082/api/v1/user")
        setUsers(result.data);

    }


    return (
    <div>

        <span>name : </span>
        <div>

            {
                users.map((user) =>( <h1> key= {user.userId}
                    <small>{user.userName}</small>
                    </h1>))
            }
        </div>
    </div>);
}

export default NewComponent;