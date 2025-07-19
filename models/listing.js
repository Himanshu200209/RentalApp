const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:String,
  image: {
    filename: String,
    url: {
      type: String,
      default: "https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=2048x2048&w=is&k=20&c=wscQ92nOh14b4X1zdqy7HpY8ZZ2uOVoyGJWneMniJVY=" ,

      set:(v) => v=== "" ? "https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=2048x2048&w=is&k=20&c=wscQ92nOh14b4X1zdqy7HpY8ZZ2uOVoyGJWneMniJVY=" :v,

      
      


    }
  },
  price:Number,
  location:String,
  country:String,
});

const Listing = mongoose.model("Listing",listingSchema);

module.exports = Listing;




// image:{
//     type:String,
//     default:"https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=2048x2048&w=is&k=20&c=wscQ92nOh14b4X1zdqy7HpY8ZZ2uOVoyGJWneMniJVY=",
//     set:(v) => v=== "" ? "https://media.istockphoto.com/id/183886840/photo/a-woman-in-a-oil-overlooking-phuket-thailand.jpg?s=2048x2048&w=is&k=20&c=wscQ92nOh14b4X1zdqy7HpY8ZZ2uOVoyGJWneMniJVY=" :v},