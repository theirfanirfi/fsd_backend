import express from 'express'


const app = express();
const port = 5000

import students from './data/students.js'



app.get('/students', function(req,res,next){
    res.json(students);
})

app.get('/students/:id', (req, res, next) => {
    let id = req.params.id;
    let student = students.find(student => student.id == id)
    res.json(student);
})

app.get('/students/:id/:sign', (req, res, next)=> {
    let {id, sign} = req.params

    let filtered_students = []
    if(sign == "lt"){
        filtered_students = students.filter(student => student.id < id)
    }else {
        filtered_students = students.filter(student => student.id > id)
    }


    res.json(filtered_students)
})

app.get('/students/:id/:sign/:gender', (req, res, next)=> {
    let {id, sign,gender} = req.params

    let students_gender = []
    if(sign == "lt"){
         students_gender= students.filter(student => student.id < id)
    }else  {
      students_gender= students.filter(student => student.id > id)
    }

      if (gender == "M") {
        students_gender = students_gender.filter(student => student.gender == "Male");
    } else  {
        students_gender = students_gender.filter(student => student.gender == "Female");
    }


    res.json(students_gender)
})


app.listen(port,()=> {
console.log('app is running');
});