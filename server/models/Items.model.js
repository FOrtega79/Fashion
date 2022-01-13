const { Schema, model } = require("mongoose");


const itemSchema = new Schema(
  {
    name: {
      type: String,
      required:[true, 'The item needs a name']
    },
    description: {
        type: String, 
        required: [true, 'The item needs a description']
    }, 
    price: {
        type: Number, 
        required: [true, 'The item needs a price to be sold']
    }, 
    color: {
        type: String, 
        required: [true, 'The item needs a color scheme']
    }, 
    size: {
        type: String, 
        required: [true, 'Please choose S - M - L - XL']
    }, 
    discount: {
        type: Boolean, 
        required: [false, 'Has discount?']
    }, 
    image: {
        type: String, 
        required: [false, 'The item needs an image']
    }, 

    category: {
        type: String, 
        required: [true, 'The item needs a category']
    }, 

  },
  {
    timestamps: true,
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
