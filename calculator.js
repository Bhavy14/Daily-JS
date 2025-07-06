let a=Number(prompt("Enter first value"));
let op=prompt("Enter Operation");
let b=Number(prompt("Enter Second value"));

function add(a,b){
    return a+b
}
function Sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}

let ans;

if(op=="+"){
    ans=add(a,b)
}
else if(op=="-"){
    ans=Sub(a,b)
}
else if(op=="*"){
    ans=mul(a,b)
}
else if(op=="/"){
    ans=div(a,b)
}
else{
    console.log("Wrong Operation")
}

console.log(ans);