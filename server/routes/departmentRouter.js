const express = require('express');
const Departments = require('../controllers/Department');
const Department = require('../controllers/Department')

// Router   handle req/res http verbs
const router = express.Router();
const deparment = new Department('../data/data.json')


//commonjs modules 
module.exports = ()=>{
    // list of departments
    router.get('/', (req, res)=>{
        res.send(deparment.getDepartments())
    })

    // Single Department 
    // GET Request (body)  
    // query- query string  url?name=value&name=value
    // params - params   url/name/value/name/value
    router.get('/name/:name', (req, res)=>{  
        res.send(deparment.getDepartment(req.params.name))
    })

    return router
}