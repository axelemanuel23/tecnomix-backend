const { model, Schema } = require("mongoose");
const { connect } = require("./mongodbService");
connect("tecnomixservices");

const userSchema = new Schema({
  name: String,
  phone: Number
});

const workSchema = new Schema({
  user: String,
  description: String,
  receptionDate: Date,
  finished: Boolean,
  deliveryDate: Date,
  delivered: Boolean,
  accesories: String,
  notes: String,
  price: Number
})


const users = new model("users", userSchema);
const works = new model("works", workSchema);

module.exports = { users, works };