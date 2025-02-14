//! Task -1:
/* 
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
const heights2 = [167, 190, 120, 165, 137];

//? using Math.min()

let lowestNum = Math.min.apply(null, heights2);
console.log(lowestNum);

//? using builtin sort function

let findLowestNum = heights2.sort(function (a, b) {
  return b - a;
});
console.log(
  "Lowest number using sort function: ",
  findLowestNum[heights2.length - 1]
);

//! Task -2:
/* 
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const friendName = ["rahim", "robin", "rafi", "ron", "rashed"];

// using normal swapping method
function findSmallName(arr) {
  let smallestName = friendName[0];
  for (let i = 0; i < arr.length; i++) {
    if (friendName[i].length < smallestName.length) {
      smallestName.length = friendName[i].length;
      smallestName = friendName[i];
    }
  }
  console.log(
    "The smallest name of the array is (normal swapping method): ",
    smallestName
  );
}
// using destructuring swapping method
findSmallName(friendName);
function findSmallName(arr) {
  let smallestName = friendName[0];
  for (let i = 0; i < arr.length; i++) {
    if (friendName[i].length < smallestName.length) {
      [friendName[i].length, smallestName.length] = [
        smallestName.length,
        friendName[i].length,
      ];
      //   smallestName.length = friendName[i].length;
      smallestName = friendName[i];
    }
  }
  console.log(
    "The smallest name of the array is (destructuring swapping method): ",
    smallestName
  );
}

findSmallName(friendName);
