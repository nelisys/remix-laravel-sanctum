import axios from 'axios';

const http = axios.create({
    baseURL: 'http://api.example.test',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'http://web.example.test',
    },
    withCredentials: true,
});

export default http;
