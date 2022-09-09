import { useState, useEffect } from "react";
import useAxiosPrivate from "./hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
 
    useEffect(() => {

         const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                });
                const userNames=response.data.map(user=>user.username)
                setUsers(userNames);
            } catch (err) {
                console.error(err);
                navigate('/auth', { state: { from: location }, replace: true });
            }
        }
        getUsers();

    }, [axiosPrivate, location, navigate])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};

export default Users;