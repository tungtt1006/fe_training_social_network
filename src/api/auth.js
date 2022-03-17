import axios from 'axios'

export const authApi = {
    login(information) {
        return axios.post('http://localhost:8080/api/login', information)
    }
}
