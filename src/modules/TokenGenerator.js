import { sign } from 'jsonwebtoken';
import { secretKey, secondsTokenDuration } from '../../config';

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
            { expiresIn: secondsTokenDuration }
        )

        return {
            success: true,
            token,
            expiresIn: secondsTokenDuration
        }
    }
}

export default TokenGenerator