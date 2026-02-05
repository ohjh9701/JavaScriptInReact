//1. spread 연산자

let array1 = [1,2,3,4,5];
let array2 = [10, ...array1, 20, 30, 55];
console.log(array2);

let array3 = array1; //얕은 복사 [ 객체는 1개 주소참소변수는 2개]
let array4 = [...array1]; //깊은 복사
                            
console.log(array4);

console.log(`array3 === array1 => ${array3 === array1}`); // true
console.log(`array4 === array1 => ${array4 === array1}`); // false

//2. 객체 생성 (spread 연산자 활용)
let obj1 = {
 a: 1,
 b: 2,
};
let obj2 = {
  z:10,
  ...obj1,
  c:4,
  d:5
}
console.log(obj2);

//3. 구조분해할당, 스프레드 연산자
function funcA([p1, p2, p3]) {
  console.log(p1+10, p2/2, p3*15);
}

const array5 = [1,2,3];
funcA(array5);

function funcB(p1, p2, p3) {
  console.log(p1+10, p2/2, p3*15);
}

const array6 = [1,2,3];
funcB(...array6);

//4. rest 매개변수
// rest는 나머지 , 나머지 매개변수
array7 = [11, 12, 13];
function funcC(p1, ...rs) {
 console.log(p1);
 console.log(rs);
}
funcC(...array7);
