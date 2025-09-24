import jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  try {
    console.log("Cookies received:", req.cookies); // <-- moved here
    const token = req.cookies?.token;  // safer check
    if (!token) {
      return res.status(400).json({ message: "token is not found" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);  
    req.userId = verifyToken.userId;

    next();
  } catch (error) {
    console.log("Error verifying token:", error.message); // log error for debugging
    return res.status(401).json({ message: `Invalid or expired token: ${error.message}` });
  }
};

export default isAuth;
