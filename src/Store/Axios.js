import axios from 'axios'

class axiosInstance {
    constructor() {
        this.axios = axios.create({
            baseURL: "https://general-auth-4ef43.firebaseio.com/"
        })
    }

    addNewUser = (user) => {
        this.axios.post('/users.json', user).then((response) => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    createNewPoll = (poll, res) => {
        this.axios.post('/polls.json', poll).then(res).catch(error => {
            console.log(error)
        })
    }

    setRequestInterceptor = (fun) => {
        return this.axios.interceptors.request.use(fun)
    }

    setResponseInterceptor = (fun) => {
        return this.axios.interceptors.response.use(res => res, fun)
    }

    removeReqInterceptor = (int) => {
        this.axios.interceptors.request.eject(int)
    }

    removeResInterceptor = (int) => {
        this.axios.interceptors.response.eject(int)
    }
}



export default axiosInstance