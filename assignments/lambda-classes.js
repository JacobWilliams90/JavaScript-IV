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
        student.grade = (student.grade -+ Math.floor(Math.random() * 20))
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
    grade: 100,
  });

  const D = new PM({
    name: 'Derrik',
    location: 'Whats it to ya?',
    age: 'None yo business',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    favSubjects: ["Math","Sci","SS"]
  });

  
  console.log(D.incDec(J))
  console.log(J.grade)
  console.log(D.incDec(J))
  console.log(J.grade)
  console.log(D.incDec(J))
  console.log(J.grade)
  console.log(D.incDec(J))
  console.log(J.grade)
  console.log(D.incDec(J))
  console.log(J.grade)
  console.log(D.incDec(J))
  console.log(J.grade)
