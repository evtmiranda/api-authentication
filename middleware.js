import jwt from 'jsonwebtoken'
import removeTextBearer from './src/modules/RemoveTextBearer'
import { secretKey } from './config'
import { isUndefined } from 'util';

export const checkToken = (req, res, next) => {
    let token = req.headers['authorization']

    if(isUndefined(token)){
        res.status(400).json({
            success: false,
            message: 'The token is required.'
        })
    }

    token = removeTextBearer(token)

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.json({
                success: false,
                message: 'The token is not valid.'
            })
        }

        req.decoded = decoded
        next()
    })
}