import { contactService } from './contact.service.js'

export async function addContact(req, res) {
    try {
        const { firstName, lastName, email, role, otherRole, platforms, otherPlatforms, isSub } = req.body
        await contactService.add(firstName, lastName, email, role, otherRole, platforms, otherPlatforms, isSub)
        res.json({
            msg: "Contact has been added"
        })
    } catch (err) {
        res.status(500).send({ err: 'Failed to add contact' })
    }
}