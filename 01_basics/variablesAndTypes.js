let userName = "soham"
// console.log(Number(userName));

let age = 11;
// console.log(String(age))

let ifTrue = true;
// console.log(String(ifTrue));


let userOne = {
    email:"SohamDharap@gmail.com",
    age:22
};

let userTwo = userOne;

userTwo.email = "dharapSoham@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

console.log(`Hello my email id: ${userTwo.email}.`);
