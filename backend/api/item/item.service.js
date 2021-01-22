const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy =null) {
    const { title , type , color,tags} = filterBy
    let cred = {}
    try {
        const collection = await dbService.getCollection('item')
        if(filterBy) {
            if(title) {
                const regex = new RegExp(title, 'i')
                cred.title = regex
            }
            if(type) cred.type = type
            if(color) cred.color = color
            if(tags) cred.tags = {$in:[tags]}
        }
        var items = await collection.find(cred).toArray()
        console.log('items',items);
        items = items.map(item => {
            item.createdAt = ObjectId(item._id).getTimestamp()
            return item
        })
        return items
    } catch (err) {
        logger.error('cannot find Items', err)
        throw err
    }
}


async function update(item) {
    try {
        // peek only updatable fields!
        const itemToSave = {
            _id: ObjectId(item._id),
            title: item.title,
            price: item.price,
            color: item.color,
            imgUrl: item.imgUrl,
            description: item.description,
            likes: item.likes,
            details: item.details,
            tags: item.tags
            // type: item.type,
            // createdAt: item.createdAt,
            // inStock: item.inStock,

            // {
            //     // type: "",
            //     // title: '',
            //     // price: 0,
            //     // color: '',
            //     // seller: {
            //     //   _id:'E4G3Ck',
            //     //   fullname:'Amelia Larson',
            //     //   imgUrl:'https://res.cloudinary.com/dt1zahrqy/image/upload/v1610610532/hf/faces/3_nz6vkf.jpg'
            //     // },
            //     // description: '',
            //     // imgUrl: 'https://ih1.redbubble.net/image.951124242.1192/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg',
            //     // tags: [
            //     //   ''
            //     // ],
            //     // likes:'',
            //     // details:''
            //   }



        }

        // like gItems
        const collection = await dbService.getCollection('item')
        await collection.updateOne({ '_id': itemToSave._id }, { $set: itemToSave })
        return itemToSave
    } catch (err) {
        logger.error('cannot insert item', err)
        throw err
    }
}


// async function query(filterBy = {}) {
//     try {
//         // const criteria = _buildCriteria(filterBy)
//         const collection = await dbService.getCollection('item')
//         // const items = await collection.find(criteria).toArray()
//         var items = await collection.aggregate([
//             {
//                 $match: filterBy
//             },
//             {
//                 $lookup:
//                 {
//                     from: 'user',
//                     localField: 'byUserId',
//                     foreignField: '_id',
//                     as: 'byUser'
//                 }
//             },
//             {
//                 $unwind: '$byUser'
//             },
//             {
//                 $lookup:
//                 {
//                     from: 'user',
//                     localField: 'aboutUserId',
//                     foreignField: '_id',
//                     as: 'aboutUser'
//                 }
//             },
//             {
//                 $unwind: '$aboutUser'
//             }
//         ]).toArray()
//         items = items.map(item => {
//             item.byUser = { _id: item.byUser._id, fullname: item.byUser.fullname }
//             item.aboutUser = { _id: item.aboutUser._id, fullname: item.aboutUser.fullname }
//             delete item.byUserId
//             delete item.aboutUserId
//             return item
//         })

//         return items
//     } catch (err) {
//         logger.error('cannot find items', err)
//         throw err
//     }

// }

async function remove(itemId) {
    try {
        // const store = asyncLocalStorage.getStore()
        // const { userId, isAdmin } = store
        const collection = await dbService.getCollection('item')
        // remove only if user is owner/admin
        // if (!isAdmin) query.byUserId = ObjectId(userId)
        await collection.deleteOne({ _id: ObjectId(itemId) })
        // return await collection.deleteOne({ _id: ObjectId(itemId), byUserId: ObjectId(userId) })
    } catch (err) {
        logger.error(`cannot remove item ${itemId}`, err)
        throw err
    }
}


async function add(item) {
    console.log("additem" ,item);

    try {
        // peek only updatable fields!
        // const itemToAdd = {
        //     byUserId: ObjectId(item.byUserId),
        //     aboutUserId: ObjectId(item.aboutUserId),
        //     txt: item.txt
        // }
        const collection = await dbService.getCollection('item')
        const res = await collection.insertOne(item)
        return res.ops[0];
    } catch (err) {
        logger.error('cannot insert item', err)
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
    add,
    update
}


