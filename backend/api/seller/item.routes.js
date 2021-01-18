const express = require('express')
const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {log} = require('../../middlewares/logger.middleware')
const {addSeller, getSellers, deleteSeller} = require('./seller.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getSellers)
router.post('/',  addSeller) //requireAuth
router.delete('/:id', deleteSeller)

module.exports = router