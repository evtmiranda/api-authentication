import { Router } from 'express'
import { authenticate, index } from './controllers/AuthenticationController'
const routes = Router()
import { checkToken } from '../middleware'

routes.post('/authenticate', authenticate)
routes.get('/', checkToken, index)

export default routes