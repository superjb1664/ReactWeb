import axios from "axios";


axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';
const baseUrl = "http://127.0.0.1:8000/";

axios.defaults.baseURL = baseUrl;


//request interceptor to add the auth token header to requests
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log("token " + token)
        if (token != -1 && token != "-1" ) {
            config.headers["Authorization"] = 'Bearer ' + token ;
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);
//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem("refreshToken");
        if (
            refreshToken &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;
            return axios
                .post(`token/refresh`, { refreshToken: refreshToken })
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem("token", res.data.token);
                        console.log("Access token refreshed!");
                        return axios(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);

export default axios