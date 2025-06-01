import express from 'express';
import courses from '../data/course.js';
const courses_router = express.Router(); 


courses_router.get('/', (req, res) => {
    res.json(courses);
});


courses_router.get('/:id', (req, res) => {
    const { id } = req.params;
    const course = courses.find(course => course.id == id);
    
    if (course) {
        res.json(course);
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});


courses_router.post('/', (req, res) => {
    const newCourse = req.body;
    courses.push(newCourse);
    res.status(201).json({
        message: 'New course successfully created',
        newCourse
    });
});


courses_router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = courses.findIndex(course => course.id == id);

    if (index !== -1) {
        courses.splice(index, 1);
        res.json({
            message: 'Course successfully deleted',
            remaining: courses.length
        });
    } else {
        res.status(404).json({
            message: 'Course with this ID does not exist'
        });
    }
});


courses_router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send('This is a PUT request for course ID: ' + id);
});

export default courses_router;
