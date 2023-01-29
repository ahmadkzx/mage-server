import { Router } from 'express'
import { createAPI } from '../controllers/mage.controller'

const router = Router()

router.post('/mage/api', createAPI)

export default router
