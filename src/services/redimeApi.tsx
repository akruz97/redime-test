import axios from 'axios';

const baseURL = 'http://';

const api = axios.create({ baseURL });

export default api;
