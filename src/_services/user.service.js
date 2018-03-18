import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    // getAll
};

function login(username, password) {
    return axios({
        "url": "http://localhost:5000/api/token",
        "method": "POST",
        'Accepts': 'application/json',
        'params': { 'email' : username, 'password': password }
    }).then(data => {
        localStorage.setItem("user", JSON.stringify(data.data)); //the token object needs to be strigified to store properly in local storage, or else it will ust be [Object object]
        console.log("TOKEN", data)
        console.log(localStorage.getItem("user"))
        const user = data.data
        return user
    })

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// //can be used to get photos
// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch('/users', requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return response.json();
}