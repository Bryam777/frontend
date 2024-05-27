import axios from 'axios';

const API_URL = 'http://localhost:8080/api/usuarios';

export const deleteuser = async (userId) => {
    return await axios.delete(`${API_URL}/${userId}`);
};

export const fetchusers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const adduser = async (user) => {
    return await axios.post(API_URL, user);
};

export const updateuser = async (userId, user) => {
    return await axios.put(`${API_URL}/${userId}`, user);
};