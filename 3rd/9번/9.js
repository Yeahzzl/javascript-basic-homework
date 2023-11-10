const 사람들 = [
  {
    이름: "김철수",
    나이: 18,
    성별: "남",
  },
  {
    이름: "김길동",
    나이: 19,
    성별: "남",
  },
  {
    이름: "김유리",
    나이: 22,
    성별: "여",
  },
  {
    이름: "김맹구",
    나이: 23,
    성별: "남",
  },
];

// 여기에 코드를 작성해주세요.
const 나이20살이상한명 = 사람들.find((one) => {
  return one.나이 >= 20;
});
console.log(나이20살이상한명);
// 결과
// { '이름': '김유리', '나이': 22, '성별': '여' }
