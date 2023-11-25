const readDatabase = require('./utils');

class StudentsController {
    static getAllStudents (request, response, DATABASE) {
    }
  
    static getAllStudentsByMajor (request, response, DATABASE) {
      const { major } = request.params;
  
      if (major !== 'CS' && major !== 'SWE') {
        response.send(500, 'Major parameter must be CS or SWE');
      } else {
        readDatabase(DATABASE)
          .then((fields) => {
            const students = fields[major];
  
            response.send(200, `List: ${students.join(', ')}`);
          })
          .catch(() => response.send(500, 'Cannot load the database'));
      }
    }
  }
  
export default StudentsController;
module.exports = StudentsController;

