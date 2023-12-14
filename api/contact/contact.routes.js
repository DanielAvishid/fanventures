import express from 'express'
import { addContact } from './contact.controller.js'

export const contactRoutes = express.Router()

contactRoutes.post('/', addContact)