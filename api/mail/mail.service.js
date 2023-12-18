import nodeMailer from 'nodemailer'

export const mailService = {
    sendUpdateMail,
    sendQuestionMail
}

const config = {
    service: 'gmail',
    auth: {
        user: MAIL_PROVIDER,
        pass: MAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
}

const transporter = nodeMailer.createTransport(config)

async function sendUpdateMail(firstName, lastName, email, role, otherRole, platforms, otherPlatforms) {
    const messageToSend = {
        from: MAIL_PROVIDER,
        to: 'danielavishid@gmail.com',
        subject: "Letter of intent has been received",
        html: `
            <h5>Name: ${firstName + ' ' + lastName}</h5>
            <h5>Email: ${email}</h5>
            <h5>Role: ${role}</h5>
            <h5>Other Role: ${otherRole}</h5>
            <h5>Platforms: ${platforms}</h5>
            <h5>Other platforms: ${otherPlatforms}</h5>
        `
    }

    try {
        await transporter.sendMail(messageToSend)
    } catch (err) {
        console.log(err)
    }
}

async function sendQuestionMail(firstName, lastName, email, message) {
    const messageToSend = {
        from: MAIL_PROVIDER,
        to: 'danielavishid@gmail.com',
        subject: "Question from landing page",
        html: `
            <h3>Name: ${firstName + ' ' + lastName}</h3>
            <h3>Email: ${email}</h3>
            <p>${message}</p>
        `
    }

    try {
        await transporter.sendMail(messageToSend)
    } catch (err) {
        console.log(err)
    }
}