const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/fruitsdb",{useNewUrlParser: true});
    
 

const fruitSchema = new mongoose.Schema({

    name: {
        type:String,
        required:[1,"why not name"]
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    comment: String

});
const Fruit = mongoose.model("fruit",fruitSchema)
const papaaaya= new Fruit({
    name:"papaaaya",
    rating:7,
    comment:"apple is the best product"
})
// papaaaya.save();
// Fruit.updateOne({name:"cheeku"},{rating:1});
// Fruit.deleteOne({name:"papaaaya"})


const banaana= new Fruit({
    name:"banana",
    rating:8,
    comment:"banana is better than apple"
})
const kiwi = new Fruit({
    name:"kiwi",
    rating:20,
    comment:"kiwi is also good"

})

// Fruit.insertMany([banaana,kiwi ])
//       .then(function () {
//         console.log("Successfully saved defult items to DB");
//       })
//       .catch(function (err) {
//         console.log(err);
//       });

// Fruit.find({name:"apple"}, (err,fruit) => {
//     if(err){
//         console.log(err)}
//         else{
//             console.log(fruits);
//         }
// });
    const peopleSchema = new mongoose.Schema({
        name: String,
        age: Number,
        // favouritefruit: fruitSchema
    })
    const People = mongoose.model("people",peopleSchema)
    const people = new People({
        name:"umer",
        age:21,
        // favouritefruit:papaaaya
    })
    // people.save();
Fruit.deleteMany({ name: 'kiwi' });





