import express from 'express'
import { sendQuestionMail, sendUpdateMail } from './mail.controller.js'

export const mailRoutes = express.Router()

mailRoutes.post('/send-update-mail', sendUpdateMail)
mailRoutes.post('/send-question-mail', sendQuestionMail)