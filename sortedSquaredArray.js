const sortedSquaredArray = (arr) => {
  const newArr = [];

  for (const num of arr) {
    newArr.push(Math.pow(num, 2));
  }

  return newArr.sort((a, b) => a - b);
};

const arr1 = [1, 2, 3, 5, 6, 8, 9];
sortedSquaredArray(arr1);

const arr2 = [-2, -1];
sortedSquaredArray(arr2);

const arr3 = [-10, -5, 0, 5, 10];
sortedSquaredArray(arr3);
