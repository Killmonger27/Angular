class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getName() {
    return this.name;
  }
  toString() {
    return `Person id: ${this.id} name: ${this.name}`;
  }
  setName(name: string) {
    this.name = name;
  }
}

let person = new Person(1, "landry");

//console.log(person.getName());
person.setName("Ezeikiel");
//console.log(person.getName());
console.log(person);

console.log(person.toString());
