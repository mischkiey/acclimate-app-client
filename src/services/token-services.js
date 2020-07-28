import config from '../config';

const TokenService = {
    // makeAuthToken (user_name, password) {
    //     return window.btoa(`${user_name}:${password}`);
    // },

    makeAuthToken(str) {
        return window.btoa(str)
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
        window.localStorage.remove(config.API_TOKEN);
    },
};

export default TokenService;