import express from 'express'

const student_router = express.Router()

import students from '../data/students.js'

student_router.get('/', function(req, res, next){
    res.json(students)
});

student_router.get('/:id', (req, res, next) => {
    let {id} = req.params
    let student = students.find(student => student.id == id)
    res.json(student);
})

student_router.post('/', (req, res, next) => {
    let newStudent = req.body
    students.push(newStudent)
    res.json({
        "message": "New student successfully created",
        "newStudent": newStudent
    })
})

student_router.delete('/:id', (req, res, next) => {
    let {id} = req.params
    let student = students.find(student => student.id == id)

    if(student){
        let index = students.indexOf(student)
        students.splice(index,1)
        res.json({
            "message" : "student successfully deleted "+students.length,
            
        })
    }else {
        res.json({
            "message": "student with this id does not exist"
        })
    }
})

student_router.put('/:id', (req, res, next)=>{
    let {id} = req.params
    res.send('it is put request method '+id)
})




export default student_router;
