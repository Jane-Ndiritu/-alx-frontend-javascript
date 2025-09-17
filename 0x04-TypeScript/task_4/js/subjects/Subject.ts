//import Subjects = require('./Teacher');

namespace Subjects {
 class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}

//export default Subjects;
