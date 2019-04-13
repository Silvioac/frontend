import axios from 'axios';

const api = axios.create({
    baseURL: 'https://projetosilvio-backend.herokuapp.com'
});

export default api;