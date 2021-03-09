const express = require('express');
const Department = require('../controllers/Department');
 

// Router   handle req/res http verbs
const router = express.Router();
const department = new Department('../data/data.json')


//commonjs modules 
module.exports = ()=>{
    // list of departments
    router.get('/', (req, res)=>{
        res.send(department.getDepartments())
    })

    // Single Department 
    // GET Request (body)  
    // query- query string  url?name=value&name=value
    // params - params   url/name/value/name/value
    router.get('/name/:name', (req, res)=>{  
        res.send(department.getDepartment(req.params.name))
    })

    router.delete('/employee/id/:id', (req, res)=>{
        department.delteEmployeeById(req.params.id)
        
        res.send({"id":req.params.id});
    })

    return router
}