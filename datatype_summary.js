/*
It is dynamiccaly typed language.

primitive datatypes : call by value
total 7 types: string, Number, null, boolean, undefined, symbol, BigInt
using typeof null = object

Reference datatypes = Non primitive

Array, objects, function

*/
//all returntype are function
//function returntype = object function
//Array
const heros =["Timepass","Java","Kaha gye"];

//objects = whatever write in {} is known as objects
let in1 = {
    name:"abcd",
    age:12
}
//object function
const myFun = function(){
     console.log("Namste");
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
In stack primitive datatype will be stored
In Heap Non primitive datatype will be stored

if you have =
use1 = use2 and it is primitive datatype then
then in stack one copy will be created.
when you change in non primitive datatype then
in heap both will get same value but if you change one
then it will affect both variables
*/
