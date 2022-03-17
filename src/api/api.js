import axios from 'axios'

export const coreApi = axios.create({
    baseURL: 'http://localhost:8080/api/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
    }
})
