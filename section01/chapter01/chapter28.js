/*
console.log(1);
setTimeout(()=>{
  console.log(2);
},3000);
console.log(3);
*/

//함수선언식
/*
function task(a, b) {
  setTimeout(()=>{
  let sum = a + b;
  console.log(`a+b = ${sum}`);
},3000);
}
task(48,56);
*/

/*
//함수선언식
//1번 방식 : 3초후에 일어날 이벤트 처리를 정의한 것.
// 이벤트 : 3초 후에
// 이벤트 처리일 (핸들러일)
function task(a, b) {
  setTimeout(() => {
  let sum = a + b;
  console.log(sum);
}, 3000);
}

task(10,20);

//2번방식
let callback = (a,b) => {
  let sum = a + b;
  console.log(sum+100)
};

function task2(a, b) {
  setTimeout(() => {
  callback(a,b);
}, 3000);
}

task2(10,20);

//***************************************** 3번 방식!
function task3(a, b, callback) {
  setTimeout(() => {
  callback(a,b);
}, 3000);
}

task3(10,20, (a,b) => console.log(a+b+1000));
*/

// 1단계 음식을 주문하는 사항
//이벤트 : 음식을 주문하면 3초후에
//핸들러 : 음식이 완성이 되서 나오는 것

function orderFood(food, callback) {
  console.log(`직원 : 주문하신 음식 ${food}이 맞으실까요?`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//orderFood("떡볶이", (food)=> console.log(`주문하신 ${food}가 완성되었습니다!`));

//1단계 음식을 차게요청하는 사항
function coolFood(food, callback) {
  console.log(`직원 : 주문하신 음식 ${food}를 차갑게 요청하셨을까요?`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//coolFood("떡볶이", (food)=> console.log(`주문하신 차가운 ${food}가 완성되었습니다!`))

 // 음식을 냉동 주문

function iceFood(food, callback) {
  console.log(`직원 : 주문하신 음식 ${food}를 냉동포장 요청하셨을까요?`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

//iceFood("떡볶이", (food)=> console.log(`주문하신 냉동 ${food}가 완성되었습니다!`))


// 2단계 음식 요청 => 차갑게 요청

// orderFood("떡볶이", (food)=> {
//   console.log(`(알림!)주문하신 ${food}가 완성되었습니다!`);
//   coolFood(food, (food)=> console.log(`(알림!)주문하신 차가운 ${food}가 완성되었습니다!`))});

// 3단계 음식 요청 => 차갑게 요청 => 냉동요청
orderFood("떡볶이", (food)=> {
  console.log(`(알림!)주문하신 ${food}가 완성되었습니다!`);
  coolFood(food, (food)=> {
    console.log(`(알림!)주문하신 차가운 ${food}가 완성되었습니다!`)
    iceFood(food, (food)=> console.log(`(알림!)주문하신 냉동 ${food}가 완성되었습니다!`));
  });
});