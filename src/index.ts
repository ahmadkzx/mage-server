import cors from 'cors'
import express from 'express'
import routes from './routes'
import { Pool as PostgresqlPool } from 'pg'
import { config as configEnv } from 'dotenv'
import { json as jsonParserMiddleware, urlencoded as urlencodedMiddleware } from 'body-parser'

configEnv()

async function init() {
  try {
    const app = express()

    app.use(cors())
    app.use(jsonParserMiddleware())
    app.use(urlencodedMiddleware())

    const dbPool = new PostgresqlPool()
    app.set('db', dbPool)

    await app.listen(process.env.PORT)

    app.use(await routes())
    app.get('/', (req, res) => res.send('Hello World !'))

    console.log('✅ App started on port:', process.env.PORT)
  } catch (err) {
    console.error(err)
  }
}

init()
