// JSX 장점 : XSS 막아준다.(Cross-Site-Scripting attacks) 보안 ↑
// 전개 연산 : ... => ex_) ...rest
// 구조 분해 할당
let a,b,rest;

({a, b} = {a : 1, b : 2});
({a, b} = {c : 1, b : 2});
({a, b} = {b : 1, c : 2});
({a, b, ...rest} = {a : 1, b : 2, c : 3, d : 4});
({a, b, ...rest} = {c : 3, d : 4, a : 1, b : 2});

console.log(a);
console.log(b);
console.log(rest);


