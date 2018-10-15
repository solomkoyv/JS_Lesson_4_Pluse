let arrNums = [],
  friendlyNams = [];

function getFriendlyNumbers(start, end) {
  if (
    typeof start !== "string" &&
    typeof end !== "string" &&
    1 <= start &&
    start <= end
  ) {
    for (let i = start; i <= end; i++) {
      arrNums.push(i);

      for (let j = 0; j <= i; j++) {
        // if (isFriendly(i, j)) {
        //   // console.log('Дружественные числа ' + i + ' ' + j);
        //   friendlyNams.push([i, j].sort());
        // }
        if (
          getDivisorsSum(j) === i &&
          getDivisorsSum(j) !== j &&
          (getDivisorsSum(i) === j &&
            getDivisorsSum(i) !== i &&
            getDivisorsSum(i) > start)
        ) {
          friendlyNams.push([i, j].sort());
        }
      }
    }
  } else {
    return false;
  }
  return friendlyNams;
}
console.log(getFriendlyNumbers(284, 500));
// console.log(arrNums);

// function isFriendly(num1, num2) {
//   let sum1 = getDivisorsSum(num1),
//     sum2 = getDivisorsSum(num2);

//   if (sum1 == num2 && sum2 == num1) {
//     return true;
//   } else {
//     return false;
//   }
// }

function getDivisorsSum(num) {
  return getSum(getDivisors(num));
}

function getDivisors(num) {
  let arrDivisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      arrDivisors.push(i);
    }
  }
  // console.log("массив делителей  " + num + " - " + arrDivisors);
  return arrDivisors;
}

function getSum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = {
  firstName: "Юрий",
  secondName: "Соломко",
  task: getFriendlyNumbers
};
