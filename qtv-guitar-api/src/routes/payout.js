const express = require("express");
const { Payout } = require("../models/payout");
const { User } = require("../models/user");
const {
  GetPaymentInfo,
  buildHistoryTrade,
} = require("../utils/additionalFunction");

const router = express.Router();

router.post("/", async (req, res) => {
  if (req.method !== "POST") return;
  const { userInfo } = req.body;
  const [_, token] = req.headers.authorization.split(" ");
  const secretKey = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(token, secretKey);
    const { email } = decode.data;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const shoppingCart = user.shoppingCart;
    const tradeHistory = buildHistoryTrade(shoppingCart);
    const orderInfo = new GetPaymentInfo(userInfo, shoppingCart);
    await orderCollection.insertOne(orderInfo);
    await User.update(
      { email },
      { $push: { tradeHistory: { $each: tradeHistory } } }
    );
    // axios.post(
    //   "https://qtv-music-shop-send-email.herokuapp.com/send-confirmation-email",
    //   {
    //     clientEmail: user.email,
    //     order: orderInfo,
    //   }
    // );

    return res
      .status(200)
      .json({ tradeHistory: [...user.tradeHistory, ...tradeHistory] });
  } catch (err) {
    console.log(err);
    if (err.name === "MongoServerError")
      return res.status(500).json({ message: "server error" });
    return res.status(401).json({ message: err.message });
  }
});

module.exports = router;
