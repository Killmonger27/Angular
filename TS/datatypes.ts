//Pour les types elementaires, TS a cette capacite de determiner le type de la variable
let varname: string;
varname = "Landry";
// console.log(varname);

//any fait reference au any qu'on rencontre en JS , donc peut changer de type

let department: any;
department = 10;
department = "10";
department = [10, "10"];

// console.log(department);

//Declaration des tableau: On precise le type de donnees qu'on veut mettre et dans le tableau
//et et ne peut rien mettre d'autre

let table: string[];
table = ["sting", "string", "string"];

let table2: Array<string>;
table2 = ["string", "string"];

// table = ['string',10] generera une erreur

//enum
const enum Color {
  red,
  green,
  blue,
}

let c: Color = Color.blue;

// console.log(c);

//tuples
//sorte de tableau qui peut contenir differents autres types de donnees
//peut etre interressant a utiliser pour les fonctions qui font des requetes et fournissent
//en sortie differents types de donnees

let nums: [first: number, second: number];

function swapNumbs(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

nums = swapNumbs(10, 20);

// console.log(nums);

//On peut aussi avoir un type objet

function concatName(inf: { name: string; secondName: string }) {
  return inf.name + inf.secondName;
}

// console.log(concatName({ name: "landry", secondName: "Ezeikiel" }));

function pyramid(nblignes: number) {
  let caractere = "#";
  console.log(`${" ".repeat(nblignes + 10 - 1)}${caractere}\n`);

  for (let i = 2; i < nblignes; i++) {
    let str = caractere.repeat(i);
    console.log(`${" ".repeat(nblignes + 10 - i)}${str}${str}\n`);
  }
}

pyramid(30);

let number: number;
number =23.4