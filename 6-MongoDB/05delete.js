db.inventory.deleteMany({}); // emptyz rthe collection

db.inventory.deleteMany({ status: 'A' });

db.inventory.deleteOne({ status: 'D' });

