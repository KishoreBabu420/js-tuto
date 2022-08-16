// // // // //var, let, const
// // // // const country = 'India';

// // // // const continent = 'Asia';

// // // // const population = 130;

// // // // // let isIsland = false;

// // // // console.log(typeof country);

// // // // console.log(population / 2);

// // // // console.log(population + 1);

// // // // //primitive

// // // // //non primitive

// // // // const markWeight = 95;
// // // // const markHeight = 1.88;

// // // // const markWeight = 85;
// // // // const johnHeight = 1.76;

// // // // const markBMI = markWeight / (markHeight * markHeight);

// // // // const johnBMI = johnWeight / johnHeight ** 2;

// // // // // Mark's BMI (28.3) is higher than John's (23.9)!

// // // // if (markBMI > johnBMI) {
// // // //   console.log("Mark's BMI " + markBMI + "is higher than John's " + johnBMI);
// // // // } else if (markBMI < johnBMI) {
// // // //   console.log(
// // // //     `John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(
// // // //       1,
// // // //     )}`,
// // // //   );
// // // // } else {
// // // //   console.log('Equal');
// // // // }

// // // // // && ||

// // // // let isIsland = false;

// // // // let isContinent = false;

// // // // if (isIsland && isContinent) {
// // // //   console.log('I am an Island and also a continent');
// // // // } else if (isIsland || isContinent) {
// // // //   console.log('Either one of us are true');
// // // // } else {
// // // //   console.log('I am not both');
// // // // }

// // // // const avgOfDolphins = +((126 + 108 + 89) / 3).toFixed(1);
// // // // console.log(avgOfDolphins);

// // // // const avgOfKoalas = (88 + 91 + 110) / 3;

// // // // console.log(typeof avgOfKoalas);

// // // // console.log(avgOfDolphins > avgOfKoalas);

// // // // if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
// // // //   console.log('Dolphins are winners');
// // // // } else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
// // // //   console.log('Koalas are winners');
// // // // } else if (
// // // //   avgOfKoalas === avgOfDolphins &&
// // // //   avgOfDolphins >= 100 &&
// // // //   avgOfKoalas >= 100
// // // // ) {
// // // //   console.log("It's a draw");
// // // // } else {
// // // //   console.log('No Result');
// // // // }

// // // // let day = '';

// // // // switch (day) {
// // // //   case 'Monday':
// // // //     console.log('It is Monday');
// // // //     break;
// // // //   case 'Tuesday':
// // // //     console.log('It is Tuesday');

// // // //   default:
// // // //     console.log('Check the input');
// // // // }

// // // // let isRaining = false;
// // // // if (isRaining) {
// // // //   console.log('It is raining');
// // // // } else {
// // // //   console.log('It is not raining');
// // // // }

// // // // isRaining ? console.log('It is raining') : console.log('It is not raining');

// // // // console.log(`It is ${isRaining ? '' : 'not'} raining`);

// // // // let bill = 325;

// // // // console.log(
// // // //  ,
// // // // );

// // // //primitive - number, string, boolean, null, undefined,

// // // // let a;
// // // // const b = null;

// // // // console.log(a);

// // // // function sum(num1, num2) {
// // // //   return num1 + num2;
// // // // }

// // // // console.log(showBill(375));
// // // // console.log(showBill(65));
// // // // console.log(showBill(175));

// // // // // console.log(sum(3, 4));

// // // const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
// // //   return (scoreOne + scoreTwo + scoreThree) / 3;
// // // };

// // // // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// // // // const avgOfDolphins = calAverage(97, 112, 102);

// // // // const avgOfKoalas = calAverage(109, 95, 123);

// // // const checkWinner = (avgOfDolphins, avgOfKoalas) => {
// // //   if (avgOfDolphins > avgOfKoalas) {
// // //     console.log(
// // //       `Dolphin's win (${avgOfDolphins.toFixed(2)} vs ${avgOfKoalas.toFixed(
// // // //         2,
// // // //       )})`,
// // // //     );
// // // //   } else if (avgOfKoalas > avgOfDolphins) {
// // // //     console.log(
// // // //       `Koala's win (${avgOfKoalas.toFixed(2)} vs ${avgOfDolphins.toFixed(2)})`,
// // // //     );
// // // //   }
// // // // };

// // // // console.log(checkWinner(calcAverage(97, 112, 102), calcAverage(109, 95, 123)));

// // // const numbers = [1, 2, 3, 4, 5];

// // // // console.log(numbers[4]);

// // // // console.log(numbers.length);

// // // //modifing

// // // //pop, push, shift ,unshift
// // // console.log(numbers);
// // // numbers.pop();
// // // console.log(numbers);
// // // numbers.push(5);
// // // console.log(numbers);
// // // numbers.shift();
// // // console.log(numbers);
// // // numbers.unshift(1);
// // // console.log(numbers);

// // // numbers[3] = 8;

// // // console.log(numbers);

// // const user = {
// //   firstName: 'Kishore',
// //   lastName: 'Babu',
// //   age: 26,
// // };

// // // console.log(user['age']);

// // // user.country = 'India';

// // // console.log(user);

// // // let userDetails = Object.values(user);

// // // console.log(userDetails);

// // const calcTip = (bill) => {
// //   let tip = 0;

// //   let total = 0;

// //   tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

// //   return tip;
// // };

// // const bills = [125, 555, 44];

// // console.log(bills);

// // const tips = [];

// // tips.push(calcTip(bills[0]));
// // tips.push(calcTip(bills[1]));
// // tips.push(calcTip(bills[2]));

// // console.log(tips);

// // const mark = {
// //   name: 'Mark',
// //   mass: 78,
// //   height: 1.69,
// // };

// // const john = {
// //   name: 'John',
// //   mass: 92,
// //   height: 1.95,
// // };

// // const calcBMI = (mass, height) => {
// //   let BMI = mass / height ** 2;

// //   return BMI;
// // };

// // console.log(calcBMI(john.mass, john.height));
// // console.log(calcBMI(mark.mass, mark.height));

// // let arr = [1, 35, 5161, 761, 6711, 16116, 1616, 161, 1071910];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// // let username = prompt('What is your name?');

// // alert('Hi ' + username);

// // const userAnswerOne = prompt('What is the capital of India?');

// // if (userAnswerOne === 'New Delhi') {
// //   score = score + 2;
// //   alert(`You are correct, score: ${score}`);
// // } else {
// //   score = score - 1;
// //   alert(`You are wrong, score: ${score}`);
// // }

// // const userAnswerTwo = prompt('What is the capital of USA?');

// // if (userAnswerTwo === 'Washington') {
// //   score = score + 2;
// //   alert(`You are correct, score: ${score}`);
// // } else {
// //   score = score - 1;
// //   alert(`You are wrong, score: ${score}`);
// // }

// let score = 0;

// function checkAnswer(question, answer) {
//   const userAnswer = prompt(question);

//   if (userAnswer === answer) {
//     score = score + 2;
//     alert(`You are correct, score: ${score}`);
//   } else {
//     score = score - 1;
//     alert(`You are wrong, score: ${score}`);
//   }
// }

// // checkAnswer('India', 'New Delhi');
// // checkAnswer('USA', 'Washington');

// // const capitals = [
// //   {
// //     question: 'India',
// //     answer: 'New Delhi',
// //   },
// //   {
// //     question: 'USA',
// //     answer: 'Washington',
// //   },
// // ];

// // function checkGame(questions) {
// //   for (let i = 0; i < questions.length; i++) {
// //     checkAnswer(questions[i].question, questions[i].answer);
// //   }

// //   alert(`Final Score: ${score}`);
// // }

// // // checkGame(capitals);

// // //template literals

// // let username = 'Kishore';

// // console.log('Hi', username);
// // console.log('Hi ' + username);
// // console.log(`Hi ${username}`);

// // let result = '';

// // function playGame(user) {
// //   let comp = getCompInput();

// //   if (user === 'rock') {
// //     if (comp === 'rock') {
// //       result = 'draw';
// //     } else if (comp === 'paper') {
// //       result = 'lose';
// //     } else if (comp === 'scissors') {
// //       result = 'win';
// //     }
// //   } else if (user === 'paper') {
// //     if (comp === 'rock') {
// //       result = 'win';
// //     } else if (comp === 'paper') {
// //       result = 'draw';
// //     } else if (comp === 'scissors') {
// //       result = 'lose';
// //     }
// //   } else if (user === 'scissors') {
// //     if (comp === 'rock') {
// //       result = 'lose';
// //     } else if (comp === 'paper') {
// //       result = 'win';
// //     } else if (comp === 'scissors') {
// //       result = 'win';
// //     }
// //   }

// //   return result;
// // }

// // function getCompInput() {
// //   let computerInput = '';

// //   let randomNumber = Math.trunc(Math.random() * 3);

// //   if (randomNumber === 0) {
// //     computerInput = 'rock';
// //   } else if (randomNumber === 1) {
// //     computerInput = 'paper';
// //   } else if (randomNumber === 2) {
// //     computerInput = 'scissors';
// //   }

// //   return computerInput;
// // }

// // console.log(playGame('rock'));
// // console.log(playGame('paper'));
// // console.log(playGame('rock'));
// // console.log(playGame('scissors'));
// // console.log(playGame('rock'));
// // console.log(playGame('paper'));

// // let numbers = [1, 2, 3, 4, 5, 6];

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// //for in for of

// // function sum(a) {
// //   let sum = 0;

// //   for (let i = 0; i < arguments.length; i++) {
// //     sum += arguments[i];
// //   }

// //   return sum;
// // }

// // console.log(sum(2, 3, 5, 4, 6, 8));

// // function square(n) {
// //   return n * n;
// // }

// // console.log(square(5));

// // function cube(n, func) {
// //   return n * func(n);
// // }

// // console.log(cube(3, square));

// //setTimeout setInterval

// // setTimeout(() => {
// //   console.log(3);
// // }, 3000);

// // let seconds = 0;
// // let minutes = 0;
// // setInterval(() => {
// //   seconds++;
// //   if (seconds === 59) {
// //     seconds = 0;
// //     minutes++;
// //   }
// //   console.log(`${minutes} : ${seconds}`);
// // }, 1000);

// //destructuring

// // const numberOne = numbers[0];
// // const numberTwo = numbers[1];

// // console.log(a, b, c, d);

// // const user = {
// //   name: 'Rajesh',
// //   city: 'Chennai',
// //   work: 'artist',
// // };

// // const { name } = user;

// // console.log(name);

// // // spread and rest ...

// // // console.log(1, 2, 3, 4, 6);
// // // console.log(...numbers);

// // const numbers = [1, 2, 3, 4, 6];

// // const [a, b, ...rem] = numbers;

// // console.log(rem);

// // console.log({ ...user });

// // const newPerson = ;

// // const updatedPeople = [...people, newPerson];

// // console.log(updatedPeople);

// // console.log(people);

// // const dog = { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] };

// // const updatedDog = { ...dog, weight: 23, curFood: 350, place: 'Chennai' };

// // console.log(updatedDog)

// //forEach, map, filter, reduce, find, sort

// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// // console.log('-------------');

// // forEach - undefined, clean Method
// // const result = numbers.forEach(function (value, index, arr) {
// //   console.log(arr);
// // });

// // console.log(result);

// //map - array, clean Method

// // const double = numbers.map((number) => {
// //   return number / 5;
// // });

// // console.log(double);

// //filter - return array, clean Method
// // const filtered = numbers.filter((value) => {
// //   return value < 5;
// // });

// // const people = [
// //   { id: 1, firstName: 'Kishore', city: 'Chennai' },
// //   { id: 2, firstName: 'Rajesh', city: 'Mumbai' },
// //   { id: 3, firstName: 'Harish', city: 'Chennai' },
// // ];

// // const chennai = people.filter((value) => {
// //   return value.city !== 'Chennai';
// // });

// // console.log(chennai);

// // //Find - return singleValue clean Method

// // const mumbai = people.find((value) => {
// //   return value.city === 'Mumbai';
// // });

// // console.log(mumbai);

// // const upd = numbers.find((value) => {
// //   return value > 6;
// // });

// // console.log(upd);

// // let numbers = [1, 2, 3, 4, 5];

// //Reduce - return single value, clean Method
// // let total = numbers.reduce((acc, value) => {
// //   return acc + value;
// // }, 100);

// // console.log(total);

// // let words = [
// //   'Burki',
// //   'Schulz',
// //   'Hummels',
// //   'Akanji',
// //   'Hakimi',
// //   'Weigl',
// //   'Witsel',
// //   'Hazard',
// //   'Brandt',
// //   'Sancho',
// //   'Gotze',
// // ];

// // //sort
// // let sortedWords = words.sort();

// // console.log(sortedWords);

// // let numbers = [4, 51, 111, 189, 19, 12, 4252, 55, 1, 2, 7, 8, 9];

// // let sortedNumbers = numbers.sort((a, b) => {
// //   return b - a;
// // });

// // console.log(sortedNumbers);

// // Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// // ('dogsJulia' and 'dogsKate'), and does the following things:
// // 1. Julia found out that the owners of the first and the last two dogs actually have
// // cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// // ages from that copied array (because it's a bad practice to mutate function
// // parameters)
// // 2. Create an array with both Julia's (corrected) and Kate's data
// // 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// // 🐶
// // ")
// // 4. Run the function for both test datasets
// // Test data:
// // , ;

// // function checkDogs(juliaDogs, kateDogs) {
// //   let juliaCorrectedDogs = [...juliaDogs];
// //   juliaCorrectedDogs.pop();
// //   juliaCorrectedDogs.pop();
// //   juliaCorrectedDogs.shift();

// //   let allDogs = [...juliaCorrectedDogs, ...kateDogs];
// //   console.log(allDogs);

// //   allDogs.forEach((age, index) => {
// //     if (age >= 3) {
// //       console.log(
// //         `Dog number ${index + 1} is an adult, and is ${age} years old`,
// //       );
// //     } else {
// //       console.log(`Dog number ${index + 1} is still a puppy`);
// //     }
// //   });
// // }

// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// // checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// function calcAverageHumanAge(ages) {
//   // const dogsToHumanAge1 = ages.map((age) => {
//   //   if (age <= 2) {
//   //     return age * 2;
//   //   } else {
//   //     return 16 + age * 4;
//   //   }
//   // });

//   // const dogsToHumanAge = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));

//   // const adultDogs1 = dogsToHumanAge.filter((age) => {
//   //   return age > 18;
//   // });

//   // const adultDogs = ages
//   //   .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//   //   .filter((age) => age > 18);

//   // const averageAges = adultDogs.reduce((acc, age) => {
//   //   return acc + age;
//   // });
//   // const averageAges = ages
//   //   .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//   //   .filter((age) => age > 18)
//   //   .reduce((acc, age) => acc + age);

//   // const average = averageAges / adultDogs.length;

//   const average = ages
//     .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter((age) => age > 18)
//     .reduce((acc, age, index, arr) => acc + age / arr.length, 0);

//   return +average.toFixed(2);
// }

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// // const sum = (a, b) => {
// //   return a + b;
// // };
// // const sumA = (a, b) => a + b;

// // console.log(sum(2, 3));
// // console.log(sumA(2, 3));

//Selecting the elements
//modifying content
//Events

//querySelector(generic)
//getElement - specific

// document.querySelector('#output');

// allBtns.forEach((btn) => {
//   console.log(btn.innerHTML);
// });

// containerEl.innerHTML = `<h3>JavaScript</h3>`;

// console.log(document.getElementById('btn-click'));

// outputEl.textContent = 'A session on DOm';

// console.log(containerEl.getAttribute('id'));

// console.log(googleEl.getAttribute('href'));

// googleEl.setAttribute('class', 'link-primary');
// googleEl.setAttribute('href', 'facebook.com');

// console.log(outputEl.classList);

// outputEl.classList.add('red');

// outputEl.style.fontSize = '50px';

// outputEl.style.color = '#1c2042';

// outputEl.style.backgroundColor = 'pink';

// const googleEl = document.getElementById('google');
// const containerEl = document.getElementById('container');
// const outputEl = document.getElementById('output');
// const allBtnEl = document.querySelectorAll('#btn-click');

// const btnEl = document.querySelector('.btn-1');

// btnEl.addEventListener('click', () => {
//   outputEl.style.color = 'green';
// });

//user gives three inputs, numberOne, numberTwo, +, -, /, *

// we need to display the result according to Selection

// const formEl = document.getElementById('form');
// const oneEl = document.getElementById('one');
// const twoEl = document.getElementById('two');
// const operatorEl = document.getElementById('operator');
// const outputEl = document.getElementById('output');

// formEl.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const numberOne = Number(oneEl.value);
//   const numberTwo = Number(twoEl.value);
//   const operator = operatorEl.value;

//   // if (operator === '+') {
//   //   outputEl.innerText = numberOne + numberTwo;
//   // } else if (operator === '-') {
//   //   outputEl.innerText = numberOne - numberTwo;
//   // }

//   outputEl.textContent = eval(`${numberOne} ${operator} ${numberTwo}`);
// });

// const btns = document.querySelectorAll('#btn-open');
// const btnClose = document.getElementById('btn-close');

// const modalEl = document.getElementById('modal');

// btns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     modalEl.classList.remove('close-modal');
//     modalEl.classList.add('show-modal');
//   });
// });

// btnClose.addEventListener('click', () => {
//   modalEl.classList.remove('show-modal');
//   modalEl.classList.add('close-modal');
// });

// document.addEventListener('keydown', (e) => {
//   console.log(e.key);

//   if (e.key === 'Escape') {
//     modalEl.classList.remove('show-modal');
//     modalEl.classList.add('close-modal');
//   }
// });

// 1. Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more `power`.

// const user1 = {
//   name: 'Ram',
//   power: 2500,
//   yuga:'Treta'
// }

// const user2 = {
//   name: 'Krishna',
//   power: 2325,
//   yuga: 'Dwapar',
// };

// if(user1.power > user2.power){
//   console.log(user1.name)
// }else if(user2.power > user2.power){
//   console.log(user2.name)
// }else{
//   console.log('Equal')
// }

// function showHigh(obj1, obj2){
//   if (obj1.power > obj2.power) {
//     console.log(obj1.name);
//   } else if (obj2.power > obj2.power) {
//     console.log(obj2.name);
//   } else {
//     console.log('Equal');
//   }
// }

//Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success.

//try & catch
//promises
//async await
//fetch ()
//browser storage
'use strict';
// let a = null;
// let b = '';
// try {
//   a = 5;
//   b = 'javaScript';
//   c = 'apple';
//   console.log(a, b);
// } catch (err) {
//   console.log(err.name);

//   if (err.name === 'ReferenceError') {
//     alert('Declare C first');
//   }
// } finally {
//   console.log(c);
// }

// console.log('first line');
// console.log('second line');

// timer(200000);
// console.log('third line');

// async function timer(time) {
//   await setTimeout(() => {
//     console.log('Done');
//   }, time);
// }

// const url = 'https://randomuser.me/api/';

// console.log(fetch(url));

// const fetchUser = function () {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       user = data;
//     });
// };

// let user;
// const fetchUser = async function () {
//   const response = await fetch(url);

//   const data = await response.json();

//   user = data;

//   console.log(user);
// };

// fetchUser();

// const inputEl = document.getElementById('input');
// const outputEl = document.getElementById('output');
// const btnTranslate = document.getElementById('submit');

// const url = 'https://api.funtranslations.com/translate/cheunh.json';

// btnTranslate.addEventListener('click', async () => {
//   const userInput = inputEl.value;
//   // console.log(userInput);
//   const textUrl = url + '?text=' + userInput;

//   const response = await fetch(textUrl);
//   const data = await response.json();

//   outputEl.textContent = data.contents.translated;
// });

let number = 1;

let person = 'Kishore';

let friends = ['Kuamar', 'Rajesh'];

let user = {
  name: 'Kishore',
  profession: 'Developer',
};

//setItem

localStorage.clear();

// localStorage.setItem('number', number);
// localStorage.setItem('number', 2);

// console.log(localStorage.getItem('number'));

// localStorage.setItem('username', person);

// console.log(localStorage.getItem('username'));

// localStorage.setItem('people', JSON.stringify(friends));

// console.log(JSON.parse(localStorage.getItem('people')));

localStorage.setItem('details', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('details')));

localStorage.removeItem('details');
