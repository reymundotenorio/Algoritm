// const nonConstructibleChange = () => {
//   let arr = [5, 7, 1, 1, 2, 3, 22];

//   const arrAsc = arr.sort((a, b) => b - a);

//   console.log(arr);

//   let iterator = 1;
//   let flag = true;

//   while (flag) {
//     if (arr.includes(iterator)) {
//       iterator += 1;
//     } else {
//       const firstIndex = arrAsc.findIndex((num) => num < iterator);
//       const nearNumber = arrAsc[firstIndex];

//       const newArr = arrAsc.filter((item, index) => index !== firstIndex);

//       if (newArr.includes(iterator - nearNumber)) {
//         iterator += 1;
//       }
//       else{

//       }
//     }
//   }
// };
