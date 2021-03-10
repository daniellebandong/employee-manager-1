// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'http://localhost:5000/api/departments/',
    getDepartment: (name)=>{
        return `http://localhost:5000/api/departments/name/${name}`
    },
    updateEmployee: (id, data)=>{
        return `http://localhost:5000/api/departments/update/id/${id}` 
    },
    deleteEmployee: (id)=>{
        return `http://localhost:5000/api/departments/employee/id/${id}` 
    }
}

export default api