export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a String');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an Array');
    }
    students.forEach((el) => {
      if (typeof el !== 'string') {
        throw TypeError('All elements must be a String');
      }
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;
  }

  set students(students) {
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    students.forEach((el) => {
      if (typeof el !== 'string') {
        throw TypeError('All elements must be a String');
      }
    });
    this._students = students;
  }
}
