import { sign } from 'jsonwebtoken';
import { secretKey, milliSecondsTokenDuration } from '../../config/constants';
import { isNull } from 'util';
const { User } = require('../models');

class TokenGenerator {
    static async authenticate(email, userKey) {
        let user = await User.findOne({
            where: {
                email,
                secretKey: userKey
            }
        })

        if (isNull(user)) {
            return {
                success: false,
                message: 'Unauthorized.'
            }
        }

        if (!(email === user.email && userKey === user.secretKey)) {
            return {
                success: false,
                message: 'Unauthorized.'
            }
        }

        let token = sign({ email },
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