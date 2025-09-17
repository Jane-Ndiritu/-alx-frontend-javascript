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
type printTeacherFunction = (firstName: string, lastName: string) => string;

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstInitial}. ${lastName}`;
};
console.log(printTeacher("samuel", "kamau"));
console.log(printTeacher("john", "mathew"));

interface StudentClass {
 new (firstName: string, lastName: string): StudentClass;
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements StudentClass{
    constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }
    displayName(): string {
    return this.firstName;
    }
}
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}