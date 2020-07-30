import config from '../config';

const TokenService = {
    makeAuthToken (user_name, password) {
        return window.btoa(`${user_name}:${password}`);
    },

    getAuthToken() {
        return window.localStorage.getItem(config.API_TOKEN)
    },

    hasAuthToken() {
        // return !!TokenService.getItem(config.API_TOKEN)
        return window.localStorage.getItem(config.API_TOKEN) ? true : false;
    },

    saveAuthToken(token) {
        window.localStorage.setItem(config.API_TOKEN, token)
    },

    clearAuthToken() {
        window.localStorage.removeItem(config.API_TOKEN);
        window.localStorage.removeItem('user_name');
    },
};

export default TokenService;