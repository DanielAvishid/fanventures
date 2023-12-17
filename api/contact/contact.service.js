import { dbService } from '../../services/db.service.js'

export const contactService = {
    add
}

async function add(firstName, lastName, email, role, otherRole, platforms, otherPlatforms, isSub) {
    try {
        if (isSub === true) {
            const subToAdd = {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
            const collection = await dbService.getCollection('sub')
            await collection.insertOne(subToAdd)
        }
        const letterOfIntent = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            otherRole: otherRole,
            platforms: platforms,
            otherPlatforms: otherPlatforms
        }
        const collection = await dbService.getCollection('letterofintent')
        await collection.insertOne(letterOfIntent)
    } catch (err) {
        throw err
    }
}