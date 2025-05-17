db.inventory.find()  // - fetch all documents
db.inventory.find({qty:100})

 db.inventory.find({
  status: { $in: ['A', 'D'] }
});
 db.inventory.find({
  $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
});
 db.inventory.findOne({
  $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
});