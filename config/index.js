import dotenv from 'dotenv'
dotenv.config()

export default {
    PORT:process.env.PUERTO || 3030,
    DB:process.env.MONGO_URL || 'mongodb://localhost:27017//mibase'
}