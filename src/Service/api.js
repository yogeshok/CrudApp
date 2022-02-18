import axios from 'axios';

const url = "http://127.0.0.1:3005/users";

export const getUsers = async () => {
    return await axios.get(url);
}