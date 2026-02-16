import express from "express"
import {sighUp} from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup",sighUp)

export default authRouter