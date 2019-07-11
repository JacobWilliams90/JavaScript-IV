// CODE here for your Lambda Classes
class Person {
    constructor(attb){
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

    demo(string) {
        console.log(`Today we are learning about ${string}.`);
    };
};
