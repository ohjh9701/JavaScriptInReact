// //반복문 사용

// const person = {
//   name: "김동진",
//   age: 25,
//   tall: 179
// }; 

// const personKeys = Object.keys(person);
// console.log(personKeys);

// for (let index = 0; index < personKeys.length; index++) {
//   const key = personKeys[index];
//   console.log(`${key} = ${person[key]}`);
// }

// const personValue = Object.values(person);
// console.log(personValue);

// for (let index = 0; index < personValue.length; index++) {
//   const values = personValue[index];
//   console.log(`${values}`)
// }

//************************ */

let player = {
  name: "Faker",
  age: 30,
  position: "MID"
};

let playerKeys = Object.keys(player);
console.log(playerKeys);

for (let i = 0; i < playerKeys.length; i++) {
  let keys = playerKeys[i];
  console.log(`${keys} = ${player[keys]}`);  
}

let playerValue = Object.values(player);
console.log(playerValue);

for (let i = 0; i < playerValue.length; i++) {
  let value = playerValue[i];
  console.log(`${value}`);
}