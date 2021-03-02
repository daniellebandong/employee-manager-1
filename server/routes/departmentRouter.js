const express = require('express');
const Departments = require('../controllers/DepartmentController');
const Department = require('../controllers/DepartmentController')
const router = express.Router();
const deparment = new Department('../data/data.json')


module.exports = ()=>{
    // list of departments
    router.get('/', (req, res)=>{
        res.send(deparment.getDepartments())
    })

    // Single Department 
    router.get('/name/:name', (req, res)=>{  
       
            
 
        res.send(deparment.getDepartment(req.params.name))
    })

    return router
}