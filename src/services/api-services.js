import config from '../config'

const APIService = {
    post(endpoint, body, token) {
        let settings;
        if(token) {
            settings = {
                'method': 'POST',
                'headers': {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(body)
            }
        } else {
            settings = {
                'method': 'POST',
                'headers': {
                    'Content-Type': 'application/json'
                },
                'body': JSON.stringify(body)
            }
        }

        return fetch(`${config.API_ENDPOINT}${endpoint}`, settings)
            .then(response => {
                if(!response.ok) {
                    return response.json().then(e => Promise.reject(e))
                } else {
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

    del(endpoint, token) {
        return fetch(`${config.API_ENDPOINT}${endpoint}`, {
            'method': 'DELETE',
                'headers': {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
        })
            .then(response => {
                if(!response.ok) {
                    response.json().then(error => Promise.reject(error))
                }
                return response.json();
            })
    },
};

export default APIService;