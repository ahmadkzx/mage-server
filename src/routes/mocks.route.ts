import { Router } from 'express'
import type { API } from '../types/api'
import { Client as DBClient } from 'pg'
import { config as configEnv } from 'dotenv'
import { getMockAPIData } from '../controllers/mock.controller'

async function getMockAPIs(): Promise<Array<API> | undefined> {
  try {
    const db = new DBClient()
    await db.connect()

    const { rows: apis } = await db.query('SELECT * FROM apis')

    return apis
  } catch (err) {
    console.error(err)
  }
}

async function generateRoutes(apis: Array<API>) {
  try {
    const router = Router()
    apis.forEach((api) => {
      if (api.method === 'GET') {
        router.get(api.route, (req, res) => getMockAPIData(req, res, api))
      } else if (api.method === 'POST') {
        router.post(api.route, (req, res) => getMockAPIData(req, res, api))
      } else if (api.method === 'DELETE') {
        router.delete(api.route, (req, res) => getMockAPIData(req, res, api))
      } else if (api.method === 'PUT') {
        router.put(api.route, (req, res) => getMockAPIData(req, res, api))
      } else if (api.method === 'PATCH') {
        router.patch(api.route, (req, res) => getMockAPIData(req, res, api))
      }
    })

    return router
  } catch (err) {
    console.error(err)
  }
}

export default async function generateMockRoutes() {
  try {
    configEnv()

    const mockAPIs = await getMockAPIs()

    if (mockAPIs && mockAPIs.length > 0) {
      const router = generateRoutes(mockAPIs)
      return router
    }

    return null
  } catch (err) {
    console.error(err)
  }
}
