//함수호이스팅 (함수선언식, 함수표현식, 화살표함수)
getArea(10,20);

function getArea(width, height){
  let area = width * height;
  console.log(`나는 람다식!! width = ${width ?? 30}, height = ${height} area = ${area}`);
}