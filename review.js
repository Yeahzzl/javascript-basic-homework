// Array
let fruits = ["banana", "orange", "kiwi"];
fruits[0] = "apple";
console.log(fruits);
// object
let myIntro = { name: "예지", color: "green", 나이: 50 };
myIntro.name = "예원";
console.log(myIntro.name);

// 넣을 위치.insertAdjacentHTML = ("beforeend", 넣을요소)

// 배열.forEach(() => {})

// products.forEach(function(product){
//     let html템플릿 = `<div class="product">
//     <h3 class="brand">${product.브랜드}</h3>
//     <h3 class="product-name">${product.상품명}</h3>
// </div>`;
// productsContainer.insertAdjacentHTML("beforeend", html템플릿);
// });

// 배열메소드중 filter, map, find는 return 필수
// find() : 조건에 만족하는 것 중 가장 먼저 발견된 것 하나만 찾을 수 있음!

// const number = [1, 2, 3, 4, 5, 6];

// const findNum = number.find((a) => {
//   return 3 <= a;
// });
// console.log(findNum);

// filter() : 배열에서 조건을 만족하는 요소들 필터링해서 새로운 배열을 만들어줌

// map() : forEach와 똑같이 전체 배열에 접근하지만 새로운 배열을 만들어줌, 변수에 담을 수 있음

const numbers = [1, 2, 3, 4];

const newArr = numbers.map((number) => {
  return number * 2;
});
console.log(newArr);

// sort() : 배열정렬가능, 오름차순으로 정렬, 기존배열 변경시킴
// 숫자는 비교로직을 넣어주어야 정렬이 가능함
// 변수명.sort((a, b) => {
//   return a - b;
// });

// spread Operator (...)

let a = [1, 2, 3];
let b = [...a];

a[0] = 100;
console.log(a);
console.log(b);
