import axios from 'axios';

const UNEXPECTED_ERROR_TEXT = "An unexpected error occurred.";

const JSON_SERVER_API = axios.create({
    baseURL: 'http://localhost:3000'
});

JSON_SERVER_API.interceptors.response.use(null, error => {
    const RESPONSE_EXPECTED_ERROR_TEST = error.response && error.response.status >= 400 && error.response.status < 500;
    
    //Unexpected error
    if(!RESPONSE_EXPECTED_ERROR_TEST) {
        console.log(error);
        alert(UNEXPECTED_ERROR_TEXT);
    }

    return Promise.reject(error);
});

export const requests = {
    del: url => JSON_SERVER_API.delete(url).then(response => response.data), 
    get: url => JSON_SERVER_API.get(url).then(response => response),
    put: (url, body) => JSON_SERVER_API.put(url, body).then(response => response.data),
    post: (url, body) => JSON_SERVER_API.post(url, body).then(response => response.data),
    patch: (url, body) => JSON_SERVER_API.patch(url, body).then(response => response.data),
};

export const userRequests = {
    login: async ({userName, password}) => {
        const response = await requests.get(`/users?userName=${userName}&password=${password}`);
        return response.data[0];
    },
};


export const musicsRequests = {
    getMusicList: async () => {
        const response = await requests.get('/musics');
        return response.data;
    },
    likeMusic: async music => {
        const response = await requests.patch(`/musics/${music.id}`, music);
        return response.data;
    },
    deleteMusic: async id => requests.del(`/musics/${id}`)
};