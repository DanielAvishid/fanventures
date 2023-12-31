import dotenv from 'dotenv'
dotenv.config()

export default {
    dbURL: process.env.MONGO_DB,
    dbName: process.env.DB_NAME
}

