let task = function() {
  setTimeout(() => {
  console.log("결과값출력");
  if(true) {
    //resolve 상태
  }else{
    //rejected 상태
  }
}, 3000);
}

//task();

//pending 상태
/*
let promise = new Promise(()=>{
  setTimeout(() => {
  console.log("결과값출력");
    if(true) {
    //resolve 상태
  }else{
    //rejected 상태
  }
}, 3000);
});

console.log(promise);
*/

//resolve 상태
/*
let promise2 = new Promise((resolve, rejected)=>{
  setTimeout(() => {
  console.log("결과값출력");
    if(true) {
    resolve("난 promise 성공이야");
  }else{
    //rejected 상태
  }
}, 2000);
});

setTimeout(()=>{
  console.log(promise2);
},3000);
*/

//reject 상태
/*
let promise3 = new Promise((resolve, rejected)=>{
  setTimeout(() => {
  console.log("결과값출력");
    if(false) {
    resolve("난 promise 성공이야");
  }else{
    rejected("난 promise 실패야");
  }
}, 2000);
});

setTimeout(()=>{
  console.log(promise3);
},3000);
*/


//4. Promise 를 실제로 활용해보자.
/*
const promise4 = new Promise((resolve, reject) => {
 // 비동기 작업 실행하는 함수
 // executor
 setTimeout(() => {
 const num = "10"
 if (typeof num === 'number') {
 resolve(num + 10);
 } else {
 reject('num이 숫자가 아닙니다');
 }
 }, 2000);
});

setTimeout(() => {
 console.log(promise4);
}, 3000);
*/


/*
// promise 성공 한 후 그 결과값을 출력한다.
const promise5 = new Promise((resolve, reject) => {
 // 비동기 작업 실행하는 함수
 // executor
 setTimeout(() => {
 const num = "10";
 if (typeof num === 'number') {
 resolve(num + 10);
 } else {
 reject('num이 숫자가 아닙니다');
 }
 }, 2000);
});

//promise5가 성공하면 작업실행
promise5.then((value)=> console.log(`성공한 결과값 = ${value}`));

//promise5가 실패하면 작업실행
promise5.catch((value)=> console.log(`실패한 결과값 = ${value}`));

setTimeout(() => {
 console.log(promise5);
}, 3000);
*/


//promise chain 방식으로 표현한다
/*
const promise6 = new Promise((resolve, reject) => {
 // 비동기 작업 실행하는 함수
 // executor
 setTimeout(() => {
 const num = 55;
 if (typeof num === 'number') {
 resolve(num + 10);
 } else {
 reject('num이 숫자가 아닙니다');
 }
 }, 2000);
});

//promise5가 성공하면 then실행/ 실패하면 catch실행
promise6
  .then((value)=> console.log(`성공한 결과값 = ${value}`))
  .catch((value)=> console.log(`실패한 결과값 = ${value}`));

setTimeout(() => {
 console.log(promise6);
}, 3000);
*/

//함수를 통해서 실행
function add10(num){
const promise = new Promise((resolve, reject) => {
 // 비동기 작업 실행하는 함수
 // executor
 setTimeout(() => {
 if (typeof num === 'number') {
 resolve(num + 10);
 } else {
 reject('num이 숫자가 아닙니다');
 }
 }, 2000);
});

return promise
}
/*
// 1단계
let promise = add10("ddd");
promise
  .then((value)=> console.log(`성공한 결과값 = ${value}`))
  .catch((value)=> console.log(`실패한 결과값 = ${value}`));
*/
/*
// 2단계
let promise = add10(100);
promise
  .then((value)=> {
    console.log(`성공한 결과값 = ${value}`)
    let promise = add10(value);
    promise
      .then((value)=> {
      console.log(`두번째 성공한 결과값 = ${value}`)
      });
  })
  .catch((value)=> console.log(`실패한 결과값 = ${value}`));
*/
/*
// 2단계 진화
let promise = add10(100);
promise
  .then((value)=> {
    console.log(`1) 성공한 결과값 = ${value}`)
    //promise를 리턴
    return add10(value);
  })
  .then((value)=> {
    console.log(`2) 성공한 결과값 = ${value}`)
  })
  .catch((value)=> console.log(`실패한 결과값 = ${value}`));
*/

// 3단계
/*
add10(100)
  .then((value)=> {
    console.log(`1) 성공한 결과값 = ${value}`)
    return add10(value);
  })
  .then((value)=> {
    console.log(`2) 성공한 결과값 = ${value}`)
    return add10(value);
  })
  .then((value)=> {
    console.log(`3) 성공한 결과값 = ${value}`)
  })
  .catch((value)=> console.log(`실패한 결과값 = ${value}`));
*/


//***************************************************

// 음식주문사항을 1단계 2단계 3단계로 해결하시오.
function orderFood(food, callback) {
  console.log(`직원 : 주문하신 음식 ${food}이 맞으실까요?`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}

function orederFood2(food) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food} 주문 완료!`);
   setTimeout(()=>{
    let flag = true;
    if(flag) {
      resolve(`주문하신 음식 ${food} 완료!`);
    }else{
      reject(`주문하신 음식 ${food} 실패!`);
    }
   },2000)

  })
  return promise
}
/*
orederFood2("치킨")
  .then((value)=> console.log(value))
  .catch((error)=> console.log(error))
*/

function coolFood2(food) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food} 차갑게 주문 완료!`);
   setTimeout(()=>{
    let flag = true;
    if(flag) {
      resolve(`주문하신 음식 ${food} 차갑게 완료!`);
    }else{
      reject(`주문하신 음식 ${food} 차갑게 실패!`);
    }
   },2000)

  })
  return promise
}
/*
coolFood2("치킨")
  .then((value)=> console.log(value))
  .catch((error)=> console.log(error))
*/


  function freezeFood2(food) {
  const promise = new Promise((resolve, reject)=>{
    console.log(`${food} 냉동 주문 완료!`);
   setTimeout(()=>{
    let flag = true;
    if(flag) {
      resolve(`주문하신 음식 ${food} 냉동 완료!`);
    }else{
      reject(`주문하신 음식 ${food} 냉동 실패!`);
    }
   },2000)

  })
  return promise
}
/*
freezeFood2("치킨")
  .then((value)=> console.log(value))
  .catch((error)=> console.log(error))
*/

// 2단계 실행

orederFood2("참치")
  .then((value)=> {
    console.log(value)
    return coolFood2("참치")
  })
  .then((value)=>{
    console.log(value)
    return freezeFood2("참치")
  })
  .then((value)=>console.log(value))
  .catch((error)=> console.log(error))