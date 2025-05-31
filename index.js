import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 5000
        

import student_router from './Api/student_api.js'

app.use('/students',student_router)