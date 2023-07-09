const express = require("express");
const { User, validate } = require("../models/user");
const { hashPassword, comparePassword } = require("../utils/hashPassword");
const { generateToken } = require("../utils/generateToken");
const { getTime } = require("../utils/additionalFunction");
const Busboy = require("busboy");
const cloudinary = require("cloudinary");
const jwtDecode = require("jwt-decode");

const router = express.Router();

cloudinaryReal = cloudinary.v2;

cloudinaryReal.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

router.post("/register", async (req, res) => {
  if (req.method !== "POST") return;
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(409).json({ message: "Your email is already used" });
  const hashedPassword = await hashPassword(req.body.password);
  user = new User({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    createDate: getTime(),
  });
  try {
    await user.save();
    return res.status(201).json({ message: "Created User" });
  } catch (err) {
    console.log("save to document", err);
  }
});

router.post("/login", async (req, res) => {
  if (req.method !== "POST") return;
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.platform !== "web") {
    return res.status(409).json({
      message: `Email này được liên kết với tài khoản ${user.platform}, xin hãy đăng nhập qua ${user.platform} `,
    });
  }

  const isValid = await comparePassword(password, user.password);
  if (isValid) {
    const payload = {
      email,
      id: user._id.valueOf(),
    };
    const [tokenKey, refreshTokenKey] = generateToken(payload);
    await User.findOneAndUpdate({ email }, { refreshToken: refreshTokenKey });
    return res
      .status(200)
      .json({ accessToken: tokenKey, refreshToken: refreshTokenKey });
  } else return res.status(401).json({ message: "Password incorrect" });
});

router.post("/login-google", async (req, res) => {
  if (req.method !== "POST") return;
  const { googleAccessToken } = req.body;
  const userData = jwtDecode(googleAccessToken);
  const { name, email, sub: userID, picture } = userData;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      const user = new User({
        email,
        name,
        platform: "google",
        createDate: getTime(),
        avatar: picture,
      });
      await user.save();
      const payload = {
        email,
        id: user._id.valueOf(),
      };
      const [tokenKey, refreshTokenKey] = generateToken(payload);
      await User.findOneAndUpdate({ email }, { refreshToken: refreshTokenKey });
      // axios.post(
      //   "https://qtv-music-shop-send-email.herokuapp.com/send-welcome-email",
      //   {
      //     clientEmail: email,
      //   }
      // );
      return res
        .status(200)
        .json({ accessToken: tokenKey, refreshToken: refreshTokenKey });
    }
    const payload = {
      email: user.email,
      id: user._id.valueOf(),
    };
    const [tokenKey, refreshTokenKey] = generateToken(payload);
    return res
      .status(200)
      .json({ accessToken: tokenKey, refreshToken: refreshTokenKey });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "server error" });
  }
});

router.patch("/updateUser", async (req, res) => {
  if (req.method !== "PATCH") return;
  const { address, payment, name, phone } = req.body;
  const [_, token] = req.headers.authorization.split(" ");
  const secretKey = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(token, secretKey);
    const { email } = decode.data;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    await User.findOneAndUpdate({ email }, { address, payment, name, phone });
    return res.status(200).json({ message: "User Updated" });
  } catch (err) {
    if (err.name === "MongoServerError")
      return res.status(500).json({ message: "server error" });
    return res.status(401).json({ message: err.message });
  }
});

router.patch("/updateAvatar", async (req, res) => {
  if (req.method !== "PATCH") return;
  const [_, token] = req.headers.authorization.split(" ");
  const secretKey = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(token, secretKey);
    const { email } = decode.data;

    const createUploader = cloudinaryReal.uploader.upload_stream(
      async (err, image) => {
        if (err) return res.status(500).json({ message: "server error" });
        await User.findOneAndUpdate({ email }, { avatar: image.url });
        return res.status(200).json({
          message: "Uploaded the image successfully",
          urlAvatar: image.url,
        });
      }
    );
    const busboy = new Busboy({
      headers: req.headers,
      limits: {
        // Cloud functions impose this restriction anyway
        fileSize: 1024 * 1024,
      },
    });
    busboy.on(
      "file",
      async function (fieldname, file, filename, encoding, mimetype) {
        if (!mimetype.includes("image")) {
          return res.status(406).json({ message: "Not image file" });
        }
        file.on("limit", function () {
          file.destroy();
          return res.status(413).json({ message: "File too large" });
        });
        file.pipe(createUploader);
      }
    );
    req.pipe(busboy);
  } catch (err) {
    if (err.name === "MongoServerError")
      return res.status(500).json({ message: "Server error" });
    return res.status(401).json({ message: err.message });
  }
});

router.patch("/updateShoppingCart", async (req, res) => {
  if (req.method !== "POST") return;
  const { shoppingCart } = req.body;
  const [_, token] = req.headers.authorization.split(" ");
  const secretKey = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(token, secretKey);
    const { email } = decode.data;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    await User.findOneAndUpdate({ email }, { shoppingCart });
    return res.status(200).json("Shopping cart updated");
  } catch (err) {
    res.status(403).json(err.message);
  }
});

module.exports = router;
