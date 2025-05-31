import express from 'express'

const course_router = express.Router()
import courses from '../data/courses.js';

course_router .get('/', function(req, res, next){
    res.json(courses)
});

course_router .get('/:id', (req, res, next) => {
    let {id} = req.params
    let course = courses.find(course => course.id == id)
    res.json(course);
})

course_router .post('/', (req, res, next) => {
    let newCourse = req.body
    courses.push(newCourse)
    res.json({
        "message": "New course successfully added",
        "newCourse": newCourse
    })
})

course_router.delete('/:id', (req, res, next) => {
    let {id} = req.params
    let course = courses.find(course => course.id == id)

    if(course){
        let index = courses.indexOf(course)
        courses.splice(index,1)
        res.json({
            "message" : "course successfully deleted "+courses.length,
            
        })
    }else {
        res.json({
            "message": "course with this id does not exist"
        })
    }
})






export default course_router;
