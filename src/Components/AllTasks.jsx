import { useEffect } from "react";
import { getUsers } from "../Service/api";


const AllTasks = () => {

    useEffect(() => {
            getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers();
        console.log(response.data);
    }
    return (
        <p>HI from user</p>
    )
}

export default AllTasks;