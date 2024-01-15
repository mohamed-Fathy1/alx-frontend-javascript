// Task 1
interface Teacher {
    firstName: string,
    lastName: string,
    readonly fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    readonly location: string,
    [key: string]: any
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3)


// Task 2
interface Directors extends Teacher {
    numberOfReports: number
}


const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName[0].toUpperCase()}. ${lastName}`
};
console.log(printTeacher(director1.firstName, director1.lastName));
