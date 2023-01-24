import { Router } from 'express'

const router = Router()

router.get('/mage/api', (req, res) => {
  res.send('Test')
})

export default router
