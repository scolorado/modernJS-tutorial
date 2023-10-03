// //strings
// console.log('hello, world');

let emailTay = 'taylornation@gmail.com';
console.log(emailTay);

// //string concatentation
let firstName = "Taylor";
let lastname= "Swift";
let fullName = firstName + ' ' + lastname;
console.log(fullName);

// //getting characters
// console.log(fullName[0]);
// console.log(fullName[7]);

// //string length
// console.log(fullName.length);

// //string methods - the () mean it is a method
// console.log(fullName.toUpperCase());

// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf("@");
// console.log(index);

// //common string methods

// //let resultA = email.lastIndexOf('g');

// //let resultA = email.slice(0,12);

// //let resultA = email.substr(4,10);

// let resultA = email.replace ('n', 'w');


// console.log(resultA);


// //order of operations - B I M A S


// let radius = 10;
// const pi = 3.14
// //console.log(radius, pi);
// //math operators +, -, *, /, **, %
// //console.log(10/2);
// //let resultB = radius %3;
// //let resultB = pi * radius **2;
// let resultB= 5 * (10-3)**2;
// console.log(resultB)

let likes = 10;
likes++;
likes--;
likes +=10;
likes-=5;
likes*=2;
likes/=2;
console.log(likes);

// //NaN- not a number
// console.log(5/'hello');

// // let resultC = 'the blog has ' + likes + ' likes';
// // console.log(resultC)

// //template strings
// const title = 'Best reads of 2023';
// const author = 'mario';
// const likes = 30;

// //concatenation way
// // let resultD = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(resultD);

// //template string way
// let resultC = `The Blog called ${title} by ${author} has ${likes} likes`;
// console.log(resultC);

// let html = `
// <h2>${title}</h2>
// `;
// console.log(html);

let ninjas = ['chun-li', 'nikki-minaj', 'trisha'];
ninjas[1]='barbie';
console.log(ninjas[1]);

// // let ages = [16, 21, 25, 39];
// // console.log(ages[2]);

// // let rando = ['crystal', 'stevie', 19, 60];
// // console. log (rando);


// //array methods
//let resultE = ninjas.join('-');
//let resultE = ninjas.indexOf('chun-li');
//let resultE = ninjas.concat(['barbie', 'crystal']);
//let resultE = ninjas.push('chun-li');
//let resultE = ninjas.pop();
// console.log(ninjas);

// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

//booleans and comparisons
//console.log(true, false, "true", "false");
//methods can return booleans
// let email = 'taylornation@gmail.com';
// let names = ['taylor', 'daisy', 'stevie']
// // let result = email.includes ('!');
// // let result = names.includes ('floot mac');
// // console.log(result);


// //compaison operatods:
// let age = 20;
// console.log (age ===20); strict comparison
// console.log (age ===21);
// console.log(age != 22);
// console.log(age > 19);
// console.log(age < 22);
// console.log(age <= 25);
// console.log(age >= 18);

// let name = 'shaun';
// console.log(name == 'shaun'); loose comparison
// console.log(name == "Shaun");
// console.log (name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

//type conversion
//let score = '100';
//score = Number(score);
//let result = String (40);
// let result = Boolean(0);
// let result = Boolean("");
//console.log(result, typeof result);

// //end of tutorial 2

//for loops
// for (let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

const queens = ['nikki', 'ice spice', 'stevie'];
for (let i = 0; i < queens.length; i++){
    console.log(queens[i]);
} 
