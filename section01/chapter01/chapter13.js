//콜백함수적용 함수선언, 함수표현, 화살표 함수
function repeat(count, callback) {
  for (let i = 0; i < count; i++) {
    callback(i);

  }
}

repeat(5, (i) => console.log(i));
repeat(5, (i) => console.log(i*10));
repeat(5, (i) => console.log(i*10+5));