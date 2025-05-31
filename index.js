import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 5000

app.use(bodyParser.json())
import student_router from './apis/students_api.js';

app.use('/students', student_router)



app.listen(port,()=> {
console.log('app is running');
});