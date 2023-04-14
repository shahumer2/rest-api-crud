const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/cardb",{useNewUrlParser: true})

const carSchema = new mongoose.Schema({

    name: {
        type:String,
        required:[1]
    },
    type: String,
    Cylinder: Number
});
const Car = mongoose.model("brand",carSchema)
const car = new Car({
    name: "eco sports",
    type:"suv",
    Cylinder:2


});
// deleting a collection
// deleteOne();
// async function deleteOne(){
//     await Car.deleteOne({_id:"64097243516222ea6831de00"})

// }
                      // reading a model
//                       find();
//  function find(){
//     const result= Car.find({name:"eco sports"})
//     console.log(result);

//  }

           // update a collection
async function updateOne(){
    await Car.updateOne({_id:"640972e0e7cb1bd495340f26"},{name:"alto"})
}
updateOne();