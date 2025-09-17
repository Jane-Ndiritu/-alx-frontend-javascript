interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [propName: string]: any;
  
};

const teacher: Teacher = {
  firstName: "samuel",
  lastName: "kamau",
  fulltimeEmployee: false,
  yearsOfExperience: 5,
  location: "Nairobi",
  contract: false
};
console.log(teacher);

interface Director extends Teacher {
  numberOfReports: number;
  }

const director: Director = {
  firstName: "John",
  lastName: "Mathew",
  location: "Nairobi",
  fulltimeEmployee: true,
  numberOfReports: 17,
  contract: true
};console.log(director);
// type FunctionprintTeacher = (firstName: string, lastName: string) => string;

// const printTeacher: FunctionprintTeacher = (firstName: string, lastName: string): string => {
//   const firstInitial = firstName.charAt(0).toUpperCase();
//   return `${firstInitial}. ${lastName}`;
// };
// console.log(printTeacher("samuel", "kamau"));
// console.log(printTeacher("john", "mathew"));
const firstName: string = "samuel";
const lastName: string = "kamau";
function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
}

console.log(printTeacher("samuel", "kamau"));

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass {
constructor(private firstName: string, private lastName: string) {}
  workOnHomework(): string {
    return "Currently working";
  }
    displayName(): string { 
      return this.lastName;
  }
}

// class StudentClass implements StudentClass{
//     constructor(private firstName: string, private lastName: string) {}

//   workOnHomework(): string {
//     return "Currently working";
//   }
//     displayName(): string {
//     return this.firstName;
//     }
//}
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
class Director implements DirectorInterface {

  workFromHome(): string {
    return "Working from home"; 
  }
  getCoffeeBreak(): string {
    return " Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }     
  workTeacherTasks(): string {
    return "Getting to work";
  }
  }

  function createEmployee (salary: number): Director | Teacher {
    if( salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }