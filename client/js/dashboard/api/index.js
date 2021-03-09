// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'https://employee-manager-dashboard.herokuapp.com/api/departments/',
    getDepartment: (name)=>{
        return `https://employee-manager-dashboard.herokuapp.com/api/departments/name/${name}`
    },
    updateEmployee: (id, data)=>{
        return `https://employee-manager-dashboard.herokuapp.com/api/departments/update/id/${id}` 
    },
    deleteEmployee: (id)=>{
        return `https://employee-manager-dashboard.herokuapp.com/api/departments/employee/id/${id}` 
    }
}

export default api