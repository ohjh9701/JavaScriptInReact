//1.대입연산자
let a1 = 1;

//2. 산술연산자
let a2 = 1;
let b2 = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); //0.5
console.log(a % b); //1

//3.연결연산자
let a3 = "1";
let b3 = "2";
console.log(a+ b); //”12”

//4.복합대입연산자
let a4 = 5;
a += 10; //+=, -=, /=, %=, *=
console.log(a); //15

//5.증감연산자
let a5 = 10;
a++; // a--
console.log(a5); //11
console.log(a5++); //11 후위연산자 a--
console.log(a5); //12
console.log(++a5); //13 전위연사자 --a
console.log(a5); //13

//6.논리연산자
console.log(!true); //false
console.log(!false); //true
console.log(true && true); //true 피연산자, 연사자(&&) 개념을이해할것
console.log(true || true); //true 피연산자, 연사자(||)

//7.비교연산자
let compareA = 1 == "1";
console.log(compareA); //true 자바스크립트는 = = 비교연산자는 값만 비교한다.(타입비교안함)
let compareA1 = 1 === "1";
console.log(compareA1); //false 자바스크립트는 = = = 비교연산자는 값과 타입을 함께 비교한다.
let compareA2 = 1 != "1";
console.log(compareA2); //false
let compareA3 = 1 !== "1";
console.log(compareA3); //true
//주의: = = 사용하지말고 = = = 사용하자.
//주의: != 사용하지말고 != = 사용하자.
let compareA4 = 1 > 2; //1 >= 2
console.log(compareA4); //false
let compareA5 = 1 < 2; // 1 <= 2
console.log(compareA5); //true

//8.자바스트립트 동적타입기능
//: 타입의 유연성을제공하지만 에러를 발생할수 있는 기능임
let compareA6 = 1; //현재는 정수형타입
compareA6 = "1"; //정수형타입으로 선언된 변수에 문자열값을 넣어도 이상없음(동적타입기능)

//9.typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let compareA7 = 1;
console.log(typeof compareA); //number
compareA7 = "1";
console.log(typeof compareA); //string

//10. ?? (null 병합 연산자)
//병합 연산자라고 하는데, 앞의 피연산자가 null 혹은 undefined 라면 뒤 피연산자를 반환하고, 그렇지
//않다면 앞의 피연산자를 반환한다. 즉 null, undefined 가 아닌 값을 찾아내는 연산자
let a6; //undefined가 저장되어 있음.
a6 = a6 ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.
console.log(a6); //10
a6 =30;
a6 = a6 ?? 10; //연산자(??)는 피연사자중에 null 이나 undefined 이 아닌값을 선택한다.
console.log(a6); //30
let a7 = null;
let x = a7 ?? b; // x = b

//11. 삼항연산자
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);