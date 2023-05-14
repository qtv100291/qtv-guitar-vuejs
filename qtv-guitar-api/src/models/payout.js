const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  province: {
    type: String,
    default: "",
  },
  district: {
    type: String,
    default: "",
  },
  commune: {
    type: String,
    default: "",
  },
  street: {
    type: String,
    default: "",
  },
});

const shoppingCartItemSchema = new mongoose.Schema({
  count: {
    type: Number,
  },
  group: {
    type: String,
  },
  id: {
    type: String,
  },
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  time: {
    type: String,
  },
});

const payoutSchema = new mongoose.Schema({
  receiverName: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: addressSchema,
  note: {
    type: String,
    default: "",
  },
  paymentMethod: {
    type: String,
  },
  orderList: [shoppingCartItemSchema],
});

const Payout = new mongoose.model("payout", payoutSchema);

exports.Payout = Payout