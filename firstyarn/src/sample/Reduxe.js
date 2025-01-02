//reduxe : Reference 기반

// 일반 값은 전달 X
function f(x){
  x = 20;
}
let value = 10;
f(value);
console.log(value); // 10;


// 주소를 옮기는 법
function f2(x){
  x.a=20;
}
let val = {a:10};
f2(val);
console.log(val); // 20;