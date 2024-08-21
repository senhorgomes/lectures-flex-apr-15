// What are classes?
//  Classes are template objects

// Their purpose?

const newStudentObject = {
    name: "Bryan",
    cohort: "April 15",
    program: "Web Development",
    
}
// What happens if I want to create another student object?
const anotherStudentObject = {
    name: "Random Student Name",
    cohort: "April 15",
    program: "Web Development",
    sayHello(){
        console.log(`Hello my name is ${this.name}, I am in the ${this.cohort} cohort, and I am apart of the ${this.program} program`)
    }
}
// console.log(anotherStudentObject.name)
// We can Classes

class StudentObject {
    constructor(studentName, studentCohort, studentProgram){
        this.name = studentName;
        this.cohort = studentCohort;
        this.program = studentProgram;
    }
    sayHello(){
        console.log(`Hello my name is ${this.name}, I am in the ${this.cohort} cohort, and I am apart of the ${this.program} program`)
    }
}

const newStudentObjectDerivedFromClass = new StudentObject("Bryan Gomes", "April 15", "Software Development")
const secondStudentObjectDerivedFromClass = new StudentObject("Santa Claus", "Dec 15", "Web Development")
const thirdStudentObjectDerivedFromClass = new StudentObject("Mrs Claus", "Dec 15", "Cyber Security")

// Can we create blueprints from existing ones?
// We can create classes that are derived from other classes
// Extends

class InstructorObject extends StudentObject {
    // name, cohort, program, and programming language
    constructor(instructorName, instructorCohort, instructorProgram, instructorProgrammingLanguage){
        // this.name = studentName;
        // this.cohort = studentCohort;
        // this.program = studentProgram;
        // The super method allows us to grab the constructor of the parent class
        super(instructorName, instructorCohort, instructorProgram)
        this.programmingLanguage = instructorProgrammingLanguage
    }
    // We are allowed to override parent methods
    sayHello(){
        console.log(`
            Hello my name is ${this.name}, 
            I am in the ${this.cohort} cohort, 
            and I am apart of the ${this.program} program, 
            and I teach ${this.programmingLanguage}`
        );
    }
}

const newInstructor = new InstructorObject("Carlito Roshan", "Sep 1", "Web Development", "Javascript")
console.log(newInstructor)
newInstructor.sayHello();
