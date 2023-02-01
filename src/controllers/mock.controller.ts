import { API } from '../types/api'
import handleError from '../utils/handle-error'
import type { Request, Response } from 'express'

export async function getMockAPIData(req: Request, res: Response, api: API) {
  try {
    const parsedData = JSON.parse(api.data)
    res.status(200).json(parsedData)
  } catch (err) {
    handleError(err, res)
  }
}
