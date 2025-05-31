import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = 5000

app.use(bodyParser.json())
import course_router from './apis/courses_apis.js';

app.use('/courses',course_router)



app.listen(port,()=> {
console.log('app is running');
});