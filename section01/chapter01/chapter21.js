//1. 일반 for문
console.log(`***********for***********`);  
const array = [1,2,3,4]
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);  
}

//2. forEach 문
console.log(`***********forEach***********`);  
array.forEach((value) => console.log(value));

//3. for of문
console.log(`***********for of***********`);  
for (let item of array) { console.log(item); }

//4. for in문(인덱스값을 준다)
console.log(`***********for in***********`);  
for (let index in array) {
  console.log(`index = ${index} -> ${array[index]}`);
}

// 3.1 객체 순회, Object.keys 사용
let person = {
 name: "홍길동",
 age: 27,
 hobby: "테니스",
};

// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let key of keys) {
 const value = person[key];
 console.log(key, value);
}
// 3.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
 console.log(value);
}