import { validate } from '../utils/validator'
import handleError from '../utils/handle-error'
import type { Request, Response } from 'express'
import type { BodyValidationItem } from '../utils/validator'

export async function createAPI(req: Request, res: Response) {
  try {
    const validatePayload: Array<BodyValidationItem> = [
      {
        name: 'name',
        value: req.body.name,
        validator: 'required',
      },
      {
        name: 'route',
        value: req.body.route,
        validator: 'required',
      },
      {
        name: 'method',
        value: req.body.method,
        validator: 'required',
      },
      {
        name: 'data',
        value: req.body.data,
        validator: 'required',
      },
    ]
    validate(validatePayload)

    const db = req.app.get('db')
    await db.query(
      'INSERT INTO apis (name, description, route, method, data) VALUES ($1, $2, $3, $4, $5)',
      [req.body.name, req.body.description, req.body.route, req.body.method, req.body.data]
    )

    res.status(200).json({ data: true })
  } catch (err) {
    handleError(err, res)
  }
}
