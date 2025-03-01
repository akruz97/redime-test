import axios from 'axios';

const baseURL = 'http://192.168.10.58:7070/api';

const api = axios.create({ baseURL });

export default api;
