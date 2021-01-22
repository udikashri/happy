const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addItem, getItems, deleteItem , updateItem} = require('./item.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getItems)
router.post('/', addItem) //requireAuth
router.put('/:id',  updateItem)
router.delete('/:id', deleteItem)

module.exports = router