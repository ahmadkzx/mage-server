import express from 'express'
import { config as configEnv } from 'dotenv'
import { json as jsonParserMiddleware, urlencoded as urlencodedMiddleware } from 'body-parser'

configEnv()

const app = express()

app.use(jsonParserMiddleware())
app.use(urlencodedMiddleware())

app.listen(3000)

app.get('/', (req, res) => res.send('Hello World !'))
