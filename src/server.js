#!/usr/bin/env node

import path from 'path'
import fs from 'fs'
import express from 'express'

const app = express()

app.use(express.static(path.join(__dirname, `..`, `public`)))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,`../public/carlton-dance.html`))
})
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

export const server = {
  app: app,
  listen: async () => {
    await app.listen(3000)
    return app
  }
}
