import express from 'express'

const course_router = express.Router()
import courses from '../data/courses.js'

course_router.get('/', function(req, res, next){
    res.json(courses)
});

course_router.get('/:id', (req, res, next) => {
    let {id} = req.params
    let course = courses.find(course => course.id == id)
    res.json(course);
})

course_router.post('/', (req, res, next) => {
    let newCourse = req.body
    courses.push(newCourse)
    res.json({
        "message": "New student successfully created",
        "newCourse": newCourse
    })
})




course_router.post('/', (req, res, next) => {
    let newCourse = req.body
    courses.push(newCourse)
    res.json({
        "message": "New student successfully created",
        "newCourse": newCourse
    })
})


course_router.put('/:id', (req, res, next)=>{
    let {id} = req.params
    res.send('it is put request method '+id)
})


export default course_router;