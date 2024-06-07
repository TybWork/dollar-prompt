import express from 'express'
import { loginUser, signUp } from '../controllers/user.controller.js'

export const authRout = express.Router()

authRout.post('/signup', signUp)
authRout.post('/login', loginUser)