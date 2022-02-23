import axios from 'axios';

const url = "http://127.0.0.1:3005/users";

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url, user);   
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}