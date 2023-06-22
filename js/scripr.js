// Lets Creates Fat Arrow Function
// function defination
let myFunctionA= x => x*x

// calling
console.log(myFunctionA(5));

let myFunctionB= (a, b)=>{
    //function body
    return a + b;
}

console.log(myFunctionB(3, 7));

// lets create object

let students = {
    fname:'Rahul',
    lname:"Sharma",
    mno:9123234567,
    address:`Moon City`
}

let { fname } = students;

console.log(fname);