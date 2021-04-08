#!/usr/bin/env node

'use strict'

import path from 'path'
import fs from 'fs'
import express from 'express'
import exphbs from 'express-handlebars'

const app = express()

const hbs = exphbs.create({
  /* config */
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.enable('view cache')

app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))
app.use(express.raw())
app.get('/', function (req, res) {
  const t = 'Pure CSS The Carlton dance by Grzegorz Witczak'
  res.render('carlton-dance.index.handlebars', {
    cache: true,
    title: t,
    jsHREF: '/public/carlton-dance.js',
    cssHREF: '/public/carlton-dance.css'
  })
})
app.get('/hello', function (req, res) {
  res.send('Hello World')
})

export const server = {
  app: app,
  listen: async () => {
    return await app.listen(process.env.PORT, () => {
      console.log('Your app is listening on port ' + listener.address().port)
    })
  }
}
