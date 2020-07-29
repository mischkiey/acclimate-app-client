import config from '../config'

// For later: Refactor into async-await for practice
const APIService = {
   // Refactor GET
   // Define settings here and modify function to accept a body parameter

    post(endpoint, body) {
        return fetch(`${config.API_ENDPOINT}${endpoint}`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(body)
        })
            // .then(response => {
            //     if(!response.ok) {
            //         response.json().then(e => Promise.reject(e))
            //     } else {
            //         response.json()
            //     }
            // })
            // .then(async response => {
            //     if(!response.ok) {
            //         const error = await response.json();
            //         throw error;
            //     };
            //     return response.json();
            // })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                } else {
                    console.log(response)
                    return response.json()
                }
            })
    },

    get(endpoint, token) {
        return fetch(`${config.API_ENDPOINT}${endpoint}`, {
            'method': 'GET',
            'headers': {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                } else {
                    return response.json()
                };
            })
    },

    patch(endpoint, settings) {
        return fetch(`${config.API_ENDPOINT}${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },

    delete(endpoint, settings) {
        return fetch(`${config.API_ENDPOINT}${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },
};

export default APIService;