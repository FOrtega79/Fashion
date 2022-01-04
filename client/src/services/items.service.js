import axios from 'axios'

const itemsService = axios.create({
    baseURL:`${process.env.REACT_APP_SERVER_URL}/items`
})

function GetAllItems() {
    return itemsService.get('/allItems')
}

function GetOneItem(itemId){
    return itemsService.get(`/theItem/${itemId}`)
}

export { GetAllItems, GetOneItem }