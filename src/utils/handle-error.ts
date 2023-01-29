import type { Response } from 'express'

export default function handleError(err: any, res: Response) {
  if (err?.type === 'Validation') {
    return res.status(422).send({ errors: err.errors })
  } else {
    console.error(err)
  }
}
