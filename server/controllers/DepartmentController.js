const fileService = require('../services/fileService')

class DepartmentController{

   constructor(dataPath) {
      this.dateFile = dataPath;
   }

   getDepartments(){
     const employees = this.getData();
     return  [... new Set(employees.map(employee=>employee.department))]
   }

   getDepartment(searchTerm){
     const employees = this.getData()
      const department = employees.filter(employee=> employee.department === searchTerm)
       return  department
   }

   getData(){
      return fileService.getFileContents(this.dateFile)

   }

  
}


module.exports = DepartmentController