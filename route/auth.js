import express from "express"
import { userSignup } from "../controller/authController.js";

// init router
const router = express.Router();


// router
router.post("/signup", userSignup);


// export router
export default router;
