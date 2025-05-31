// import express from 'express'
// npm Init
// npm install express
// node index.js
// http://localhost:5000/
// ctrl + C
// node index.js
// npm install -g nodemon --save
// nodemon index.js
//https://www.mockaroo.com/
// http://localhost:5000/students/4
// http://localhost:5000/students/male



import express from 'express'


const app = express();
const port = 5000

import students from './data/students.js'


app.get('/students', function (req, res, next) {
    res.json(students);
});



app.get('/students/:id/:sign/:gender', (req, res, next) => {
    let {id, sign, gender} = req.params
    let filtered_students = [];
    if(sign == "lt"){
     filtered_students =  students.filter(student=> student.gender.toLowerCase() == gender && student.id < id)
    }else{
             filtered_students =  students.filter(student=> student.gender.toLowerCase() == gender && student.id > id)
    }
    res.json(filtered_students);
});



app.listen(port, () => {
    console.log('app is running');
});