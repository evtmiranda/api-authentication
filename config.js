import { config } from 'dotenv'
config()

export const secretKey = process.env.SECRET_KEY
export const secondsTokenDuration = process.env.SECONDS_TOKEN_DURATION
export const port = process.env.PORT