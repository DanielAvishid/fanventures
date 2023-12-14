import { logger } from '../../services/logger.service.js'
import { mailService } from './mail.service.js'

export async function sendUpdateMail(req, res) {
    const { firstName, lastName, email, role, otherRole, platforms, otherPlatforms } = req.body
    try {
        await mailService.sendUpdateMail(firstName, lastName, email, role, otherRole, platforms, otherPlatforms)
        logger.info('Update mail has been sent')
        res.json({
            msg: "Email has been sent"
        })
    } catch (err) {
        logger.info('Update mail has been failed')
        res.status(500).send({ err: 'Failed to send mail' })
    }
}

export async function sendQuestionMail(req, res) {
    const { firstName, lastName, email, message } = req.body
    try {
        await mailService.sendQuestionMail(firstName, lastName, email, message)
        logger.info('Question mail has been sent')
        res.json({
            msg: "Email has been sent"
        })
    } catch (err) {
        logger.info('Question mail has been failed')
        res.status(500).send({ err: 'Failed to send mail' })
    }
}