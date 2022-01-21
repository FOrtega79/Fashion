const router = require('express').Router()

const { response } = require('express')
const { isAuthenticated } = require('../middleware/middelware.JWT')
const { getAdminLoggedIn } = require('../middleware/middelwareIsAdmin')

const Item = require("./../models/Items.model")

router.get("/allItems", (req, res, next) => {

    Item
    .find()
    .then(response => res.json(response))
    .catch(err => next(new Error(err)))
})


router.get("/details/:item_id", (req, res, next)=> {
    const { item_id } = req.params

    Item
    .findById(item_id)
    .then(response => res.json(response))
    .catch(err => next(new Error(err)))

})

router.post("/addNewItem", (req, res, next)=> {
   
    const { name, description, price, color, size, discount, imageUrl, category } = req.body

    Item
    .create({ name, description, price, color, size, discount, image:imageUrl, category })
    .then(response => res.json(response))
    .catch(err => next(new Error(err)))

})



module.exports = router