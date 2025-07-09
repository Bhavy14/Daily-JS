let a=[1,54,32,2,7]

// for(let i=0; i<a.length; i++){
//     console.log(a[i]);
// }

// a.forEach((value, index, arr)=>{
//     console.log(value, index, arr);
// })

// let newA = a.map((e,index,arr)=>{
//     return e**2;
// })

// console.log(newA)

const filterEx = (e)=>{
    if(e>3)
        return true;
    return false;
}

console.log(a.filter(filterEx))