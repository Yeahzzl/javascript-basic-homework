// 여기에 1번 문제의 답을 작성하세요.

async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
}
getData();

// 여기에 2번 문제의 답을 작성하세요.

async function getProduct() {
  const res = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "BMW Pencil",
      /* other product data */
    }),
  });
  const data = await res.json();
  console.log(data);
}
getProduct();

// 오답

// 여기에 1번 문제의 답을 작성하세요.

// async function getData() {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     return data;
//   }
//   console.log(getData());

// 여기에 2번 문제의 답을 작성하세요.

// async function getProduct() {
//   const res = await fetch("https://dummyjson.com/products/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: "BMW Pencil",
//       /* other product data */
//     }),
//   });
//   const data = await res.json();
//   return data;
// }
// console.log(getProduct());
