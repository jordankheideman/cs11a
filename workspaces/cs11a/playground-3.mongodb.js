db.getMongo().getDBs();
use('CS628Practice')
db
db.createCollection('users')
db.users.insertMany([
    { name: 'user1', age: 30, email: 'user1@example.com' },
    { name: 'user2', age: 25, email: 'user2@example.com' },
    { name: 'user3', age: 28, email: 'user3@example.com' }
])
db.users.find()
db.users.find({ age: { $lt: 30 } })
db.users.updateOne({ name: 'user1' }, { $set: { age: 31 } })
db.users.find()
db.users.deleteOne({ name: 'user2' })
db.users.find()
db.users.aggregate([
    { $group: { _id: null, avgAge: { $avg: '$age' } } }
])
db.users.createIndex({ email: 1 })
db.users.createIndex({ name: 'text', email: 'text'})
db.users.find({ $text: { $search: 'user1'} })
db.users.find().sort({ age: -1 })
db.users.find().limit(2).skip(1)
db.users.aggregate([
    { $group: { _id: '$age', count: { $sum: 1 } } },
    { $sort: { _id: 1 } }
])
db.users.aggregate([
    { $group: { _id: null, maxAge: {$max: '$age' }, minAge: { $min: '$age' } } }
])
db.places.insertMany([
    { name: 'Park A', location: { type: 'Point', coordinates: [0, 0] } },
    { name: 'Park B', location: { type: 'Point', coordinates: [1, 1] } },
    { name: 'Park C', location: { type: 'Point', coordinates: [2, 2] } }
])
db.places.createIndex({ location: '2dsphere' })
db.places.find({
    location: {
        $nearSphere: {
            $geometry: {
                type: 'Point',
                coordinates: [0, 0]
            },
            $maxDistance: 2000 // meters
        }
    }
})
db.places.insertMany([
    { name: 'Park A', location: { type: 'Point', coordinates: [0, 0] } },
    { name: 'Park B', location: { type: 'Point', coordinates: [1, 1] } },
    { name: 'Cafe C', location: { type: 'Point', coordinates: [2, 2] } }
])
db.places.find()
db.places.createIndex({ location: '2dsphere' })
db.users.find({
    $or: [
        { name: { $regex: '^u', $options: 'i' } },
        { name: { $regex: '^C', $options: 'i' } }
    ]
})
db.users.aggregate([
    { $group: { _id: null, totalAge: { $sum: '$age'} } }
])
db.users.drop()
db.getMongo().getDBs();
db
db.getCollectionNames()
