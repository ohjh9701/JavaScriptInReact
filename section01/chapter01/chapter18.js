// 방법1
function returnFalse() {
console.log("Fasle 함수");
return false;
}
function returnTrue() {
console.log("True 함수");
return true;
}
console.log(returnTrue()|| returnFalse());
// 방법2
function returnFalse() {
console.log("Fasle 함수");
return undefined;
}
function returnTrue() {
console.log("True 함수");
return 10;
}
console.log(returnFalse() && returnTrue());
// 단락 평가 활용 사례
function printName(person) {
 const name = person && person.name;
 console.log(name || "person의 값이 없음");
46
}
printName(); // 출력: person의 값이 없음
printName({ name: "홍길동" }); //출력: 홍길동
// 조건문에서 false 로 인정되는 것(primitive type 에서 기본값 모두 들어간다) + NaN
undefined;
null;
0
false
""
NaN

//단락평가 테스팅
//함수선언문

function printName(person) {
  const name = person && person.name;
  console.log(name || "person 객체는 없습니다.");
}

printName({name:"홍길동"});
