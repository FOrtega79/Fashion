import axios from 'axios'

const uploadService = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/upload`
})

export function uploadImg(imgForm) {
    return uploadService.post('/image', imgForm)
}