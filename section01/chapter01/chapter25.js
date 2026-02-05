// 배열의 구조 분해 할당 (배열을 분해하여 변수에 저장한다)
let array = [1,2,3];
let one = array[0];
let two = array[1];
let three = array[2];

let [_one, _two, _three, four = 4] = array;

console.log(_one);
console.log(_two);
console.log(_three);
console.log(four);


// 객체의 구조 분해 할당 

let person = {
 name: "홍길동",
 age: 27,
 hobby: "테니스",
};

let person3 = person;
console.log(person3 === person);

let {
  age:myAge,
  name : myName,
  hobby : myHobby,
  extra = "Hello"
} = person;

console.log(myAge, myName, myHobby, extra);

//3.함수(람다식 = 화살표함수)
//각 멤버변수를 변수로 저장하고 싶고 출력하고 싶다
let printPerson = ({name, age, hobby, extrq = "Do it!"}) => {
  console.log(`name = ${name}`);
  console.log(`age = ${age + 1}`);
  console.log(`hobby = ${hobby}`);
  console.log(`extra = ${extra}`);
}

printPerson(person);