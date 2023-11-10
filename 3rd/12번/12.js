const 투두 = [
  {
    id: 1,
    할일: "8시기상",
    완료여부: false,
  },
];

// 투두가 배열이 아닌 객체로 되어있어서 자꾸 오류가...
// 배열메소드!!! 꼼꼼하게 확인하고 오류잡자

// 여기에 코드를 작성해주세요.
const newTodo = 투두.map((a) => {
  return { ...a, 완료여부: true };
});

console.log(투두);
console.log(newTodo);
// 결과
// { id: 1, '할일': '8시기상', '완료여부': false }
// { id: 1, '할일': '8시기상', '완료여부': true }
