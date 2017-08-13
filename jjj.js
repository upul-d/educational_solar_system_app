use farm;

db.animals.insert([
 {
   name: “Erik”,
   type: “Polar Bear”
 },
 {
   name: “Sally”,
   type: “Kangeraff”,
   friend: db.animas.find({name: “Erik”})
 }
]);

db.animals.update(
 {name: “Erik”},
 {$set: {bacon: “Goose”}}
);

db.animals.find();

db.dropDatabase();