export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype) throw TypeError('length must be a number');
    if (Object.getPrototypeOf(students) !== Array.prototype) throw TypeError('students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name_) {
    if (Object.getPrototypeOf(name_) !== String.prototype) throw TypeError('name must be a string');
    this._name = name_;
  }

  set length(length_) {
    if (Object.getPrototypeOf(length_) !== Number.prototype) throw TypeError('length must be a number');
    this._length = length_;
  }

  set students(students_) {
    if (Object.getPrototypeOf(students_) !== Array.prototype) throw TypeError('students must be an array');
    for (const i of students_) {
      if (Object.getPrototypeOf(i) !== String.prototype) throw TypeError('students must be an array of strings');
    }
    this._students = students_;
  }
}
