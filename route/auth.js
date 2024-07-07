import express from "express"
import { signin, userSignup } from "../controller/authController.js";

// init router
const router = express.Router();


// router
router.post("/signup", userSignup);
router.post("/signin", signin);


// export router
export default router;
