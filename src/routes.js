import { Router } from 'express'
import { authenticate, index } from './controllers/AuthenticationController'
const routes = Router()
import { authenticate as authenticateToken } from '../src/middlewares/authentication'

routes.post('/authenticate', authenticate)
routes.get('/', authenticateToken, index)

export default routes