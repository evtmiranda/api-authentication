import { sign } from 'jsonwebtoken';
import { secretKey, milliSecondsTokenDuration } from '../config/constants';
class TokenGenerator {
    static authenticate(username, password) {
        let mockedUsername = 'admin'
        let mockedPassword = '123'

        if (!(username === mockedUsername && password === mockedPassword)) {
            return {
                success: false,
                message: 'Unauthorized.'
            }
        }

        let token = sign({ username },
            secretKey,
            { expiresIn: milliSecondsTokenDuration }
        )

        return {
            success: true,
            token,
            expiresIn: milliSecondsTokenDuration
        }
    }
}

export default TokenGenerator