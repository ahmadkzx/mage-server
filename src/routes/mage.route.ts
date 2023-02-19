import { Router } from 'express'
import { createAPI, getAPIs, createSchema } from '../controllers/mage.controller'

const router = Router()

router.get('/mage/api', getAPIs)
router.post('/mage/api', createAPI)
router.post('/mage/schema', createSchema)

export default router
