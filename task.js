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
      smallestName = friendName[i];
    }
  }
  console.log(
    "The smallest name of the array is (destructuring swapping method): ",
    smallestName
  );
}

findSmallName(friendName);

//! Task-3:
/* 
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
    
    Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
    */
let laptop = 35000;
let tablet = 15000;
let mobile = 20000;

function calculateElectronicsBudget(quantityLap, quantityTab, quantityMob) {
  let total =
    laptop * quantityLap + tablet * quantityTab + mobile * quantityMob;
  return `Total budget required for laptop, tablet & mobile is ${total}`;
}

let total = calculateElectronicsBudget(2, 3, 1);
console.log(total);

//! Task-4:
/* 
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input

        const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(products) {
  let total = 0;
  for (const phone of products) {
    total = total + phone.price;
  }
  return total / products.length;
}

const averagePrice = findAveragePhonePrice(phones);
console.log("The average price of all the phone is: ", Math.ceil(averagePrice));
