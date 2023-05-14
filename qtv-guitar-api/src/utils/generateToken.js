const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const iatTime = Math.floor(Date.now() / 1000);
  const expTimeToken = iatTime + 3600;
  const expTimeRefreshToken = iatTime + 14 * 24 * 3600;
  const secretKey = process.env.JWT_SECRET_KEY;
  const secretRefreshKey = process.env.JWT_SECRET_REFRESH_KEY;
  const tokenKey = jwt.sign({ data: payload, exp: expTimeToken }, secretKey);
  const refreshTokenKey = jwt.sign(
    { data: payload, exp: expTimeRefreshToken },
    secretRefreshKey
  );
  return [tokenKey, refreshTokenKey];
}
module.exports = { generateToken };
