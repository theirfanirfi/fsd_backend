import express from 'express'
import bodyParser from 'body-parser'
import courses_router from './apis/courses_apis.js';

const app = express();
const port = 5000

app.use(bodyParser.json())


app.use('/courses', courses_router)



app.listen(port,()=> {
console.log('app is running');
});