import { Router } from 'express'
import { createAPI, getAPIs } from '../controllers/mage.controller'

const router = Router()

router.get('/mage/api', getAPIs)
router.post('/mage/api', createAPI)

export default router
