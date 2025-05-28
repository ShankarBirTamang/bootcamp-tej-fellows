/* eslint-disable no-unused-vars */
class Student {
  constructor(name, email) {
    this.name = name.slice(0, 1).toUpperCase() + name.slice(1);
    this.email = email;
    this.grades = [];
  }
  addGrade(grade) {
    this.grades.push(grade);
    return this; //this is for chaining
  }

  getGradeAverage() {
    if (this.grades.length === 0) return 0;
    let sum = this.grades.reduce((sum, currentValue) => currentValue + sum, 0);
    return sum / this.grades.length;
  }
}

class Alumni extends Student {
  constructor(name, email, year) {
    super(name); // call the constructor of the parent class
    this.email = email;
    this.year = year;
  }

  getGraduationYear() {
    return this.year;
  }
}
