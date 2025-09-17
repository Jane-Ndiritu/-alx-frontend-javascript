type Teacher = {
  firstName: string;
  lastName: string;
  fulltimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  contract: boolean;
};

const teacher: Teacher  = {
  firstName: "samuel",
  lastName: "kamau",
  fulltimeEmployee: false,
  yearsOfExperience: 5,
  location: "Nairobi",
  contract: false
};
console.log(teacher);
type Directors = {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
};

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director);