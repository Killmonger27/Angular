"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    toString() {
        return `Person id: ${this.id} name: ${this.name}`;
    }
    setName(name) {
        this.name = name;
    }
}
let person = new Person(1, "landry");
//console.log(person.getName());
person.setName("Ezeikiel");
//console.log(person.getName());
console.log(person);
console.log(person.toString());
