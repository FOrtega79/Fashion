import axios from 'axios'

const authService = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/auth`
})

function signup(credentials) {
    return authService.post('/signup', credentials)
}

function login(credentials) {
    return authService.post('/login', credentials)
}

function verify(token) {
    return authService.get('/signup', { headers: { Authorization: `Bearer ${token}`} })
}

export {signup, login, verify}
