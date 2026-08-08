import express from 'express'
import 'dotenv/config'
import {db} from './db/index.js'
import {pacientes} from './db/schema.js'

const server = express()
server.use(express.json())

server.get('/pacientes', async ()=>{
    
})