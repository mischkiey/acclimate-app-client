import config from '../config'

// For later: Refactor into async-await for practice
const APIServices = {
   // Refactor GET
   // Define settings here and modify function to accept a body parameter

    post(endpoint, settings) {
        return fetch(`${config.API_TOKEN}/${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },

    get(endpoint) {
        return fetch(`${config.API_TOKEN}/${endpoint}`)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },

    patch(endpoint, settings) {
        return fetch(`${config.API_TOKEN}/${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },

    delete(endpoint, settings) {
        return fetch(`${config.API_TOKEN}/${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },
};

export default APIServices;