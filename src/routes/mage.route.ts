import { Router } from 'express'
import { createAPI, getAPIs, createSchema, getSchemas } from '../controllers/mage.controller'

const router = Router()

router.get('/mage/api', getAPIs)
router.post('/mage/api', createAPI)
router.get('/mage/schema', getSchemas)
router.post('/mage/schema', createSchema)

export default router
