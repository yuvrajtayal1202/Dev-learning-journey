db.inventory.insertOne({ item: "canvas", qty: 100, tags: ["cotton"] });

db.inventory.insertMany([
  { item: "canvas1", qty: 100, tags: ["cotton"] },
  { item: "canvas2", qty: 100, tags: ["cotton"] },  
  { item: "canvas3", qty: 100, tags: ["cotton"] },
  { item: "canvas4", qty: 100, tags: ["cotton"] },
  { item: "canvas5", qty: 100, tags: ["cotton"] },
  { item: "canvas6", qty: 100, tags: ["cotton"] },
]);
