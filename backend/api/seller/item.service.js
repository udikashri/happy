const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        // const criteria = _buildCriteria(filterBy)
        const collection = await dbService.getCollection('seller')
        // const sellers = await collection.find(criteria).toArray()
        var sellers = await collection.aggregate([
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
        sellers = sellers.map(seller => {
            seller.byUser = { _id: seller.byUser._id, fullname: seller.byUser.fullname }
            seller.aboutUser = { _id: seller.aboutUser._id, fullname: seller.aboutUser.fullname }
            delete seller.byUserId
            delete seller.aboutUserId
            return seller
        })

        return sellers
    } catch (err) {
        logger.error('cannot find sellers', err)
        throw err
    }

}

async function remove(sellerId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('seller')
        // remove only if user is owner/admin
        const query = { _id: ObjectId(sellerId) }
        if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne(query)
        // return await collection.deleteOne({ _id: ObjectId(sellerId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove seller ${sellerId}`, err)
        throw err
    }
}


async function add(seller) {
    try {
        // peek only updatable fields!
        const sellerToAdd = {
            byUserId: ObjectId(seller.byUserId),
            aboutUserId: ObjectId(seller.aboutUserId),
            txt: seller.txt
        }
        const collection = await dbService.getCollection('seller')
        const res = await collection.insertOne(sellerToAdd)
        return res.ops[0];
    } catch (err) {
        logger.error('cannot insert seller', err)
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


