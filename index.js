#! user/bin/env node
// creating Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
// creating class of Student and extending it to class Person
class Student extends Person {
    constructor(name, age, rollNum) {
        super(name, age);
        this.courses = [];
        this.rollNum = rollNum;
    }
    registerForcourses(course) {
        this.courses.push(course);
    }
}
// creating class of Instructor and extending it to class Person
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assignCourses(course) {
        this.courses.push(course);
    }
}
// creating class of Courses
class Courses {
    constructor(id, name) {
        this.students = [];
        this.instructors = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForcourses(this);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
        instructor.assignCourses(this);
    }
}
// constructing class of department
class Department {
    constructor(name) {
        this.course = [];
        this.instructors = [];
        this.name = name;
    }
    addCourses(course) {
        this.course.push(course);
    }
    empInstructor(instructor) {
        this.instructors.push(instructor);
    }
}
//now lets make some objects
const department1 = new Department("Computer Science");
const department2 = new Department("Emerging Technologies");
const course1 = new Courses("CR0100", "Metaverse");
const course2 = new Courses("CR0110", "A.I");
const course3 = new Courses("CR0100", "BCC");
const instructor1 = new Instructor("Nouman", 38, 70000);
const instructor2 = new Instructor("Faheem", 41, 80000);
const student1 = new Student("Rizwan", 42, "PIAIC0001");
const student2 = new Student("Ali", 38, "PIAIC0002");
const student3 = new Student("Fahad", 41, "PIAIC0003");
const student4 = new Student("Umer", 35, "PIAIC0004");
const student5 = new Student("Faisal", 35, "PIAIC0004");
// creating courses
course1.addStudent(student1);
course1.addStudent(student2);
course1.addStudent(student4);
course1.setInstructor(instructor1);
course1.setInstructor(instructor2);
course2.addStudent(student1);
course2.addStudent(student3);
course2.addStudent(student5);
course2.setInstructor(instructor1);
course2.setInstructor(instructor2);
course3.addStudent(student2);
course3.addStudent(student4);
course3.addStudent(student5);
course3.setInstructor(instructor1);
// registering students for courses
student1.registerForcourses(course1);
student2.registerForcourses(course1);
student4.registerForcourses(course1);
student1.registerForcourses(course2);
student3.registerForcourses(course2);
student5.registerForcourses(course2);
student2.registerForcourses(course3);
student4.registerForcourses(course3);
student5.registerForcourses(course3);
// constructing departments
department1.addCourses(course1);
department1.addCourses(course2);
department2.addCourses(course3);
department1.empInstructor(instructor1);
department1.empInstructor(instructor2);
department2.empInstructor(instructor1);
// console.log(course1)
// console.log(course1.instructors)
console.log(department1);
export {};
// console.log(instructor1)
