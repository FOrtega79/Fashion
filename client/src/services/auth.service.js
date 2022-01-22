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

function adminlogin(token) {
    return authService.post('/admin', { headers: { Authorization: `Bearer ${token}`} })
}

function verify(token) {
    return authService.get('/verify', { headers: { Authorization: `Bearer ${token}`} })
}

function listUsers(){
    return authService.get('/users')
}

export {signup, login, adminlogin, verify, listUsers}
