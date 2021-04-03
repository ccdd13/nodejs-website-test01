#!/usr/bin/env node

import os from 'os'
import { server } from './src/server.js'

console.log('nodejs project')
console.log(`\tos.platform() ${os.platform()}`)
console.log(`\tos.arch() ${os.arch()}`)
console.log(`\tos.type() ${os.type()}`)
console.log(`\tos.release() ${os.release()}`)
console.log(`\tos.version() ${os.version()}`)
console.log(`\tprocess.version ${process.version}`)

server.listen()
