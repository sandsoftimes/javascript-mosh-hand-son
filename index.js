console.log('Hello Wolrd');
// let name='Mosh';
// console.log(name);


//cannot be a reserved keyword
//should be meaningful name 

// let firstName='Mosh';
let lastName='Hamadani';

//  Constant Type
// const interestRate=0.3;
// interestRate=1;
// console.log(interestRate);

//  Primitive or Value Types

let name='Mosh';
let age=30;
let isApproved=false;
let firstName='undefined';
let selectedColor=null; 

// Dynaming Typing Language (Javascript)

typeof name;

// objects

let person={
    name:'Mosh',
    age:30,
};

person.name;
person['name']='john';
person.name='alia';

console.log(person.name);

// Arrays

let selectedColorArray=['red','blue'];
selectedColorArray[2]=1;
console.log(selectedColorArray.length);

function greet(name,lastname){
    console.log("Hello "+name+" brother "+lastname); 
}
greet('ali','ahmad');

// types of functions

// calculating the square

function zreet(name,lastnameO){
    console.log('Hello '+ name+ ' lastnameO');
}

function square(number){
    return number*number;
}
console.log(square(2));

// for (i=0;i<3;i++){
//     console.log("Hi");
// }

for (i=1;i<=10;i++){
    console.log('10x'+i+'='+10*i);
}

function conv(number){
    kilometer=number*0.62137119;
    return kilometer;
}
console.log(conv(92));

function summer(ar1,ar2){
    arr3=[]
    for (i=0;i<10;i++){
        arr3=ar1[i]+ar2[i];
    }
    return arr3;
}
ar1=[2,3,4,5];
ar2=[3,4,4,6];
arr3=[]
arr3=summer(ar1,ar2);
// console.log(arr3[2]);

// Javascript Basics Completed With Mosh