const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
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

const PaymentSchema = new mongoose.Schema({
  cardType: {
    type: String,
    default: "",
  },
  cardNumber: {
    type: String,
    default: "",
  },
  cardOwner: {
    type: String,
    default: "",
  },
  cardExpireDate: {
    type: String,
    default: "",
  },
  cardCvv: {
    type: String,
    default: "",
  },
});

const ShoppingCartItemSchema = new mongoose.Schema({
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
});

const TradeHistoryItemSchema = new mongoose.Schema({
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

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    default: "web",
  },
  name: {
    type: String,
    required: true,
  },
  refreshToken: { type: String, default: "" },
  phone: { type: String, default: "" },
  avatar: { type: String, default: "" },
  shoppingCart: { type: [ShoppingCartItemSchema], default: [] },
  address: { type: AddressSchema, default: {} },
  payment: { type: PaymentSchema, default: {} },
  createDate: { type: String, default: "" },
  tradeHistory: { type: [TradeHistoryItemSchema], default: [] },
});
const User = new mongoose.model("user", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}
exports.User = User;
exports.validate = validateUser;
