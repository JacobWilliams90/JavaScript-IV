// CODE here for your Lambda Classes
class Person{
    constructor(attb){
        this.name = attb.name;
        this.age = attb.age;
        this.location = attb.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    };

}
