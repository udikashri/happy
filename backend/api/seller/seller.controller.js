const logger = require('../../services/logger.service')
const userService = require('../user/user.service')
const sellerService = require('./seller.service')

async function getSellers(req, res) {
    console.log('h',req.query);
    try {
        const sellers = await sellerService.query(req.query)
        res.send(sellers)
    } catch (err) {
        logger.error('Cannot get sellers', err)
        res.status(500).send({ err: 'Failed to get sellers' })
    }
}

async function deleteSeller(req, res) {
    try {
        await sellerService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete seller', err)
        res.status(500).send({ err: 'Failed to delete seller' })
    }
}


async function addSeller(req, res) {
    try {
        var seller = req.body
        seller.byUserId = req.session.user._id
        seller = await sellerService.add(seller)
        seller.byUser = req.session.user
        seller.aboutUser = await userService.getById(seller.aboutUserId)
        res.send(seller)

    } catch (err) {
        logger.error('Failed to add seller', err)
        res.status(500).send({ err: 'Failed to add seller' })
    }
}

module.exports = {
    getSellers,
    deleteSeller,
    addSeller
}