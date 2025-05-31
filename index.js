import express from 'express'


const app = express();
const port = 5000

import students from './data/students.js'

app.get('/students/male', (req, res, next) => {
    let maleStudents = students.filter(student => student.gender?.toLowerCase() === 'male')
    res.json(maleStudents);
});

app.get('/students/female', (req, res, next) => {
    let femaleStudents = students.filter(student => student.gender?.toLowerCase() === 'female');
    res.json(femaleStudents);
});

app.get('/students', function (req, res, next) {
    res.json(students);
});

app.get('/students/:id/:sign', (req, res, next) => {
    let { id, sign } = req.params;

    let filtered_students = [];
    if (sign == "lt") {
        filtered_students = students.filter(student => student.id < id);
    } else {
        filtered_students = students.filter(student => student.id > id);
    }
    res.json(filtered_students);
});

app.get('/students/:id', (req, res, next) => {
    let id = req.params.id;
    let student = students.find(student => student.id == id);
    res.json(student);
});



app.listen(port, () => {
    console.log('app is running');
});