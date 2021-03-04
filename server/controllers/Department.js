const fileService = require("../services/fileService");

class Department {
  // new Department() creating object of type Department
  // propertie, methods and events

  constructor(dataPath) {
    this.dataFile = dataPath;
  }

  getDepartments() {
    const employees = this.getData();
    // new set hand piece of code to get unique things....
    return [...new Set(employees.map((employee) => employee.department))];
  }

  getDepartment(searchTerm) {
    const employees = this.getData();
    const department = employees.filter(
      (employee) => employee.department === searchTerm
    );
    return department;
  }

  getData() {
    return fileService.getFileContents(this.dataFile);
  }
}

module.exports = Department;
