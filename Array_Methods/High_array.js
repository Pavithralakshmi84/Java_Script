//Filter


const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Number:", evenNumbers);

const value = [50, 100, 20, 30, 55, 66, 21, 33, 57];
const odd = value.filter(num => num % 2 != 0)
console.log("ODD Numbers:", odd);


const a = [20, 30, 58, 96, 55, true, 43, 37, false];
const booleanValues = a.filter(element => typeof element === 'boolean');
console.log("boolean:", booleanValues);

const x = [20, 30, 55, 47, 21, 100];
const output = x.filter(num => num % 5 === 0);
console.log("Divisible by 5:", output);

const vechile = ["bus", "lorry", "train", "Aeroplane"];
const transport = vechile.filter(value => value.length <= 3)
console.log(transport);


const salary = [50000, 80000, 45000, 25000, 950000, 120000];
console.log("Before", salary)
let sal = salary.filter(value => value >= 40000);
console.log("High Salary", sal);

const range = [2, 6, 7, 35, 25, 41, 55, 70, 4, 3, 5, 61];
let result = range.filter(num => num >= 5 && num <= 50)
console.log("Range from 5 to 50:", result);

const marks = [75, 66, 95, 97, 35, 25, 48, 66, 94, 82, 41, 22, 88, 49];
let score = marks.filter(num => num >= 35);
console.log("Pass Marks above 35:", score);

let age = [22, 20, 21, 34, 99, 50, 90, 70, 60];
let adults = age.filter(a => a >= 18 && a <= 30);
console.log("Adult:", adults);
let aged = age.filter(a => a > 50);
console.log("Aged person:", aged);

let menu = [{ item: "Milkshake", price: 90 }, { item: "Coffee", price: 15 }, { item: "Juice", price: 80 }];
let costly = menu.filter(m => m.price > 20);
console.log("Price above 20:", costly);

const traffic = [
    { color: "red", command: "STOP" },
    { color: "green", command: "GO" },
    { color: "yellow", command: "wait" }
];

let signal = traffic.filter(obj => obj.command === "GO");
console.log("traffic:", signal);

//find


let value1 = [1, 3, 4, 6, 8];
let Even = value1.find(n => n % 2 === 0);
console.log(" Even Number", Even);


let ODD = value1.find(n => n % 2 !== 0);
console.log("Odd Number", ODD);


let ab = [0,15,69,20,52,87,96,33,77,55]
let large = ab.find(n => n > 5);
console.log("Greater than 5", large);

let mark = [60, 75, 90, 45];
let topper = mark.find(m => m > 80);
console.log(" First topper:", topper);


let vegetable = ["tomato", "ladies finger", "potato", "drumstick","cucumber"];
let veg1 = vegetable.find(x => x=== "cucumber");
console.log("Find the vegetable:", veg1);


let items = [
    { name: "Tea", price: 20 },
    { name: "Coffee", price: 60 },
    { name: "Juice", price: 40 }
];
let cost = items.find(i => i.price > 50);
console.log("Costly item:", cost);

let nums3 = [2, 3, 11, 25, 8];
let div5 = nums3.find(n => n % 5 === 0);
console.log(" Divisible by 5:", div5);


let values = [0, null, undefined, false, "Hello"];
let truth = values.find(Boolean);
console.log("First truthy value:", truth);


let nums = [10, 250, 90, 200,30,55];
let small = nums.find(n => n < 50);
console.log("Less than 50:", small);


let employee = [
    { id: 51, name: "Regana" },
    { id: 255, name: "Vinoth" },
    { id: 30, name: "Balaji" }
];
let search = employee.find(emp=> emp.name === "Balaji");
console.log(" Found customer:", search);

//reduce

let nums_a = [1, 2, 3, 4, 5];
let sum = nums_a.reduce((a, b) => a + b, 0);
console.log(" Total:", sum);


let pro = nums_a.reduce((a, b) => a * b, 1);
console.log("Product:", pro);


let min = nums_a.reduce((a, b) => (a < b ? a : b));
console.log(" Min:", min);


let shop = [
    { item: "Tea", price: 15 },
    { item: "Coffee", price: 25 },
    { item: "Juice", price: 30 }
];
let totalPrice = shop.reduce((total, i) => total + i.price, 0);
console.log("Total Price:", totalPrice);


let nums_b = [100, 20, 10];
let sub = nums_b.reduce((a, b) => a - b);
console.log("Subtract:", sub);

let income = [
    { month: "jan", amount: 2000 },
    { month: "feb", amount: 3000 },
    { month: "mar", amount: 5000 }
];
let totalIncome = income.reduce((sum, d) => sum + d.amount, 0);
console.log(" Total Income:", totalIncome);

let nums_c = [5, 15, 20, 2, 30];
let count = nums_c.reduce((acc, n) => acc + (n > 10 ? 1 : 0), 0);
console.log(" Numbers > 10:", count);


let nums_d = [10, 20, 30];
let avg = nums_d.reduce((a, b) => a + b, 0) / nums_d.length;
console.log("Average:", avg);




