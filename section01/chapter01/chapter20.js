//내장함수 (반복문 => 자기 스타일로 변경한 반복문)
//foreach 멤버함수
/*****forEach 
const array = [1,2,3,4];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
// array.forEach((value, index, array) => {
//   console.log(`value = ${value}`);
//   console.log(`index = ${index}`);
//   console.log(`array = ${array}`);
//   console.log(`*********************************`);
// });          

array.forEach((value) => {
  console.log(`${value}`);
});
*************/

/********** MAP
const array = [1,2,3,4];
const newArray = [];
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  value = value * 10;
  newArray.push(value);
}
console.log(array);
console.log(newArray);

let newArray2 = array.map((value)=> value * 10 );

console.log(newArray2);
 ***********/

/**  filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
 { name: "구길동", hobby: "테니스" },
 { name: "저길동", hobby: "테니스" },
 { name: "홍길동", hobby: "독서" },
];

let newArray =  arr1.filter((value)=> value.hobby === "테니스");

console.log(arr1);
console.log(newArray);
// [{ name: "구길동", hobby: "테니스" }, { name: "저길동", hobby: "테니스" }] 배열이 출력됨.
*/

/******* find / findIndex
let array1 = [
 { name: "구길동", hobby: "테니스" },
 { name: "저길동", hobby: "테니스" },
 { name: "홍길동", hobby: "독서" },
];
let findItem = null;
for (let i = 0; i < array1.length; i++) {
  let item = array1[i];
  if(item.hobby === "독서") {
    findItem = item;
    break;
  }
}

console.log(findItem);

let findItem2 = array1.find((value)=> value.hobby === "테니스" && value.name === "저길동");

console.log(findItem2);

let array1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

let findIndex = array1.findIndex((value)=> value.hobby === "독서");

console.log(array1[findIndex]);

console.log(findIndex2);
*/

/*** slice(start, end)

let array1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "축구" },
  { name: "홍길동", hobby: "독서" },
  { name: "우길동", hobby: "게임" },
  { name: "삼길동", hobby: "코딩" },
];

let newArray = array1.slice(0,3); // 0번부터 3번 (0,1,2)

console.log(newArray);

/*** concat
let array1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "축구" },
  { name: "홍길동", hobby: "독서" }
];

let array2 = [
  { name: "우길동", hobby: "게임" },
  { name: "삼길동", hobby: "코딩" }
];

let array3 = array1.concat(array2);

console.log(array3);
*/

/***** sort 
// 배열을 사전순으로 내림차순 정렬하는 메서드
// 자바스크립트는 문자단위 정렬
let arr3 = [0,1,3,2,10,30,20];

//숫자를 정렬
arr3.sort((num1, num2) => {
  return num1 - num2;
})
console.log(arr3);

let arr4 = ["abc","dzf","ghi","jkl","jao"];

let arr5 = arr4.sort().reverse();
console.log(arr5);
*/

/**** join
const arr6 = ["김동진","님","안녕하세요","반가워요"];
const joined = arr6.join("==");
console.log(joined);

const arr7 = joined.split("==");
console.log(arr7);
*/

