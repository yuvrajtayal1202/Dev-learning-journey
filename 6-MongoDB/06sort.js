// Comparison
// The following operators can be used in queries to compare values:

// $eq: Values are equal
// $ne: Values are not equal
// $gt: Value is greater than another value
// $gte: Value is greater than or equal to another value
// $lt: Value is less than another value
// $lte: Value is less than or equal to another value
// $in: Value is matched within an array
// Logical
// The following operators can logically compare multiple queries.

// $and: Returns documents where both queries match
// $or: Returns documents where either query matches
// $nor: Returns documents where both queries fail to match
// $not: Returns documents where the query does not 

db.inventory.find().sort({qty: -1})
db.inventory.find().sort({qty: +1})
db.inventory.find().skip(1)
db.inventory.find().skip(2)
