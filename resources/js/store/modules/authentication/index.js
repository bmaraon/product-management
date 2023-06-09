import axios from 'axios';

export default {
    state: () => ({
        loginMessage: {
            success: '',
            error: ''
        }
    }),
    getters: {
        getLoginMessage(state) {
            return state.loginMessage;
        }
    },
    mutations: {
        setLoginMessage(state, message) {
            state.loginMessage = { ...state.loginMessage, ...message }
        }
    },
    actions: {
        loginUser: ({ }, data) => {
            return axios.post(`${window.BASE_URL}/api/login`, {
                email: data.email,
                password: data.password
            });
        },
        logoutUser: ({ }, data) => {
            return axios.delete(`${window.BASE_URL}/api/logout`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }).then(response => {
                return response;
            });
        },
    },
}