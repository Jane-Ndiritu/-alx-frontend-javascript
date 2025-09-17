;
var teacher = {
    firstName: "samuel",
    lastName: "kamau",
    fulltimeEmployee: false,
    yearsOfExperience: 5,
    location: "Nairobi",
    contract: false
};
console.log(teacher);
var director = {
    firstName: "John",
    lastName: "Mathew",
    location: "Nairobi",
    fulltimeEmployee: true,
    numberOfReports: 17,
    contract: true
};
console.log(director);
// type FunctionprintTeacher = (firstName: string, lastName: string) => string;
// const printTeacher: FunctionprintTeacher = (firstName: string, lastName: string): string => {
//   const firstInitial = firstName.charAt(0).toUpperCase();
//   return `${firstInitial}. ${lastName}`;
// };
// console.log(printTeacher("samuel", "kamau"));
// console.log(printTeacher("john", "mathew"));
var firstName = "samuel";
var lastName = "kamau";
function printTeacher(firstName, lastName) {
    var firstInitial = firstName.charAt(0).toUpperCase();
    return firstInitial + ". " + lastName;
}
console.log(printTeacher("samuel", "kamau"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
