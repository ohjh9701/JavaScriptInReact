//1.사용자 정의 객체
let o1 = {name : "이름", age : 250}
let o2 = {...o1}; // 깊은복사
o2.hobby = "취미";
console.log(o2); // false

console.log(JSON.stringify(o1) === JSON.stringify(o2)); // true
