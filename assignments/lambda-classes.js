// CODE here for your Lambda Classes
class Person {
    constructor(attb) {
        this.name = attb.name;
        this.age = attb.age;
        this.location = attb.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    };

}

class Instructor extends Person {
    constructor(attb) {
        super(attb); {
            this.specialty = attb.specialty;
            this.favLanguage = attb.favLanguage;
            this.catchPhrase = attb.catchPhrase;
        }
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    };

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    incDec(student){
        let min = -5
        let max = 5
        student.grade = (student.grade + Math.floor(Math.random() * (max - min) + min))
    }
};

class Student extends Person {
    constructor(attb) {
        super(attb); {
        this.previousBackground = attb.previousBackground;
        this.className = attb.className;
        this.favSubjects = attb.favSubjects;
        this.grade = attb.grade;
        }
    }

    listSubjects(){
        this.favSubjects.forEach(function(item) {
            console.log(item);
          });
    }


    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }

    graduate(){
        if (this.grade > 70)
        return `${this.name} is ready to graduate!`
        else
        return `${this.name} needs to increse their grade to graduate.`
    }
}

class PM extends Instructor {
    constructor(attb) {
        super(attb); {
            this.gradClassName = attb.gradClassName;
            this.favInstructor = attb.favInstructor;
        }
    }

    standup(channel){
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

}


const J = new Student({
    name: 'Jacob',
    location: 'Christiansburg',
    age: 29,
    favLanguage: 'dunno',
    specialty: '*looks shifty eyed*',
    catchPhrase: `Live every day as if it were your last.`,
    favSubjects: ["Math"],
    grade: 87,
  });

  const D = new PM({
    name: 'Derrik',
    location: 'Whats it to ya?',
    age: 'None yo business',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubjects: ["Math","Sci","SS"],
    gradClassName: 'CS1',
    favInstructor: 'Tommyboy',
  });

  const T = new Instructor({
    name: 'Tommyboy',
    location: 'Whats it to ya?',
    age: 'None yo business',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubjects: ["nothing"],
  });
  




  D.incDec(J)
  console.log(J.grade)
  D.incDec(J)
  console.log(J.grade)
  D.incDec(J)
  console.log(J.grade)
  D.incDec(J)
  console.log(J.grade)
  D.incDec(J)
  console.log(J.grade)
  D.incDec(J)
  console.log(J.grade)

  console.log(J.graduate())

  console.log(D.gradClassName)