const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('order')
        // const orders = await collection.find(criteria).toArray()
        var orders = await collection.aggregate([
            {
                $match: filterBy
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'byUserId',
                    foreignField: '_id',
                    as: 'byUser'
                }
            },
            {
                $unwind: '$byUser'
            },
            {
                $lookup:
                {
                    from: 'user',
                    localField: 'aboutUserId',
                    foreignField: '_id',
                    as: 'aboutUser'
                }
            },
            {
                $unwind: '$aboutUser'
            }
        ]).toArray()
        orders = orders.map(order => {
            order.byUser = { _id: order.byUser._id, fullname: order.byUser.fullname }
            order.aboutUser = { _id: order.aboutUser._id, fullname: order.aboutUser.fullname }
            delete order.byUserId
            delete order.aboutUserId
            return order
        })

        return orders
    } catch (err) {
        logger.error('cannot find orders', err)
        throw err
    }

}

async function remove(orderId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('order')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(orderId) }
        if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(orderId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove order ${orderId}`, err)
        throw err
    }
}


async function add(order) {
    try {
        // peek only updatable fields!
        const orderToAdd = {
            byUserId: ObjectId(order.byUserId),
            aboutUserId: ObjectId(order.aboutUserId),
            txt: order.txt
        }
        const collection = await dbService.getCollection('order')
        const res = await collection.insertOne(orderToAdd)
        return res.ops[0];
    } catch (err) {
        logger.error('cannot insert order', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


