import axios from 'axios';

const JSON_SERVER_API = axios.create({
    baseURL: 'http://localhost:3000'
});


export const requests = {
    del: url => JSON_SERVER_API.delete(url).then(resp => resp.data), 
    get: url => JSON_SERVER_API.get(url).then(resp => resp.data),
    put: (url, body) => JSON_SERVER_API.put(url, body).then(resp => resp.data),
    post: (url, body) => JSON_SERVER_API.post(url, body).then(resp => resp.data)
};

export const userRequests = {

};

export const musicsRequests = {

};