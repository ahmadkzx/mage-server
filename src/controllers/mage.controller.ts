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
  } catch (err) {
    handleError(err, res)
  }
}
