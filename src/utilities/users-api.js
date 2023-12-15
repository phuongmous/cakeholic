import sendRequest from './send-request';
const BASE_URL = '/api/users'; // all the user routes in Express are here

export async function signUp (userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}

export async function login (credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}