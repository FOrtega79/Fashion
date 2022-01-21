import axios from 'axios'

const itemsService = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/items`
})

function GetAllItems(token) {
    return itemsService.get('/allItems', { headers: { Authorization: `Bearer ${token}`} })
}

function GetOneItem(itemId){
    return itemsService.get(`/details/${itemId}`)
}

function createNewItem(item){
    return itemsService.post(`/addNewItem`, item)
}

export { GetAllItems, GetOneItem, createNewItem}