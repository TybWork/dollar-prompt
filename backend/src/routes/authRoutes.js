import express from 'express'
import { clearCookie, loginUser, signUp } from '../controllers/user.controller.js'

export const authRout = express.Router()

authRout.post('/signup', signUp)
authRout.post('/login', loginUser)
authRout.get('/logout', clearCookie)
