"use strict";
//Exemple de la fonction mentionnee dans la docu
//La mention RTFM prends tout son sens maintement lol donc RTFM mon reufff
function greeter(fn) {
    fn("Hello, World");
}
/*
    fn: (a: string) => void /Cette syntaxe correspond a la declaration du type de la fonction fn
    Elle prend en parametre une chaine de caractere et ne retourne rien

*/
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole); //Devinnez la sortie de cet appel de fonction qui prend en parametre une autre
//fonction :)
