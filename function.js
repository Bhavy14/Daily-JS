console.log("Function");

function timepass(name) {
    console.log("Hey "+ name);
    console.log(name+" doing timepass");
}

timepass('bhavy');

function add(a,b,c=4){
    return a+b+c;
}

ans = add(3,5);

console.log('Addition : '+ans);