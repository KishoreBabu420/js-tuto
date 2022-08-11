// // // //var, let, const
// // // const country = 'India';

// // // const continent = 'Asia';

// // // const population = 130;

// // // // let isIsland = false;

// // // console.log(typeof country);

// // // console.log(population / 2);

// // // console.log(population + 1);

// // // //primitive

// // // //non primitive

// // // const markWeight = 95;
// // // const markHeight = 1.88;

// // // const markWeight = 85;
// // // const johnHeight = 1.76;

// // // const markBMI = markWeight / (markHeight * markHeight);

// // // const johnBMI = johnWeight / johnHeight ** 2;

// // // // Mark's BMI (28.3) is higher than John's (23.9)!

// // // if (markBMI > johnBMI) {
// // //   console.log("Mark's BMI " + markBMI + "is higher than John's " + johnBMI);
// // // } else if (markBMI < johnBMI) {
// // //   console.log(
// // //     `John's BMI ${johnBMI.toFixed(1)} is higher than Mark's ${markBMI.toFixed(
// // //       1,
// // //     )}`,
// // //   );
// // // } else {
// // //   console.log('Equal');
// // // }

// // // // && ||

// // // let isIsland = false;

// // // let isContinent = false;

// // // if (isIsland && isContinent) {
// // //   console.log('I am an Island and also a continent');
// // // } else if (isIsland || isContinent) {
// // //   console.log('Either one of us are true');
// // // } else {
// // //   console.log('I am not both');
// // // }

// // // const avgOfDolphins = +((126 + 108 + 89) / 3).toFixed(1);
// // // console.log(avgOfDolphins);

// // // const avgOfKoalas = (88 + 91 + 110) / 3;

// // // console.log(typeof avgOfKoalas);

// // // console.log(avgOfDolphins > avgOfKoalas);

// // // if (avgOfDolphins > avgOfKoalas && avgOfDolphins >= 100) {
// // //   console.log('Dolphins are winners');
// // // } else if (avgOfKoalas > avgOfDolphins && avgOfKoalas >= 100) {
// // //   console.log('Koalas are winners');
// // // } else if (
// // //   avgOfKoalas === avgOfDolphins &&
// // //   avgOfDolphins >= 100 &&
// // //   avgOfKoalas >= 100
// // // ) {
// // //   console.log("It's a draw");
// // // } else {
// // //   console.log('No Result');
// // // }

// // // let day = '';

// // // switch (day) {
// // //   case 'Monday':
// // //     console.log('It is Monday');
// // //     break;
// // //   case 'Tuesday':
// // //     console.log('It is Tuesday');

// // //   default:
// // //     console.log('Check the input');
// // // }

// // // let isRaining = false;
// // // if (isRaining) {
// // //   console.log('It is raining');
// // // } else {
// // //   console.log('It is not raining');
// // // }

// // // isRaining ? console.log('It is raining') : console.log('It is not raining');

// // // console.log(`It is ${isRaining ? '' : 'not'} raining`);

// // // let bill = 325;

// // // console.log(
// // //  ,
// // // );

// // //primitive - number, string, boolean, null, undefined,

// // // let a;
// // // const b = null;

// // // console.log(a);

// // // function sum(num1, num2) {
// // //   return num1 + num2;
// // // }

// // // console.log(showBill(375));
// // // console.log(showBill(65));
// // // console.log(showBill(175));

// // // // console.log(sum(3, 4));

// // const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
// //   return (scoreOne + scoreTwo + scoreThree) / 3;
// // };

// // // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123

// // // const avgOfDolphins = calAverage(97, 112, 102);

// // // const avgOfKoalas = calAverage(109, 95, 123);

// // const checkWinner = (avgOfDolphins, avgOfKoalas) => {
// //   if (avgOfDolphins > avgOfKoalas) {
// //     console.log(
// //       `Dolphin's win (${avgOfDolphins.toFixed(2)} vs ${avgOfKoalas.toFixed(
// // //         2,
// // //       )})`,
// // //     );
// // //   } else if (avgOfKoalas > avgOfDolphins) {
// // //     console.log(
// // //       `Koala's win (${avgOfKoalas.toFixed(2)} vs ${avgOfDolphins.toFixed(2)})`,
// // //     );
// // //   }
// // // };

// // // console.log(checkWinner(calcAverage(97, 112, 102), calcAverage(109, 95, 123)));

// // const numbers = [1, 2, 3, 4, 5];

// // // console.log(numbers[4]);

// // // console.log(numbers.length);

// // //modifing

// // //pop, push, shift ,unshift
// // console.log(numbers);
// // numbers.pop();
// // console.log(numbers);
// // numbers.push(5);
// // console.log(numbers);
// // numbers.shift();
// // console.log(numbers);
// // numbers.unshift(1);
// // console.log(numbers);

// // numbers[3] = 8;

// // console.log(numbers);

// const user = {
//   firstName: 'Kishore',
//   lastName: 'Babu',
//   age: 26,
// };

// // console.log(user['age']);

// // user.country = 'India';

// // console.log(user);

// // let userDetails = Object.values(user);

// // console.log(userDetails);

// const calcTip = (bill) => {
//   let tip = 0;

//   let total = 0;

//   tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

//   return tip;
// };

// const bills = [125, 555, 44];

// console.log(bills);

// const tips = [];

// tips.push(calcTip(bills[0]));
// tips.push(calcTip(bills[1]));
// tips.push(calcTip(bills[2]));

// console.log(tips);

// const mark = {
//   name: 'Mark',
//   mass: 78,
//   height: 1.69,
// };

// const john = {
//   name: 'John',
//   mass: 92,
//   height: 1.95,
// };

// const calcBMI = (mass, height) => {
//   let BMI = mass / height ** 2;

//   return BMI;
// };

// console.log(calcBMI(john.mass, john.height));
// console.log(calcBMI(mark.mass, mark.height));

// let arr = [1, 35, 5161, 761, 6711, 16116, 1616, 161, 1071910];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let username = prompt('What is your name?');

// alert('Hi ' + username);

// const userAnswerOne = prompt('What is the capital of India?');

// if (userAnswerOne === 'New Delhi') {
//   score = score + 2;
//   alert(`You are correct, score: ${score}`);
// } else {
//   score = score - 1;
//   alert(`You are wrong, score: ${score}`);
// }

// const userAnswerTwo = prompt('What is the capital of USA?');

// if (userAnswerTwo === 'Washington') {
//   score = score + 2;
//   alert(`You are correct, score: ${score}`);
// } else {
//   score = score - 1;
//   alert(`You are wrong, score: ${score}`);
// }

let score = 0;

function checkAnswer(question, answer) {
  const userAnswer = prompt(question);

  if (userAnswer === answer) {
    score = score + 2;
    alert(`You are correct, score: ${score}`);
  } else {
    score = score - 1;
    alert(`You are wrong, score: ${score}`);
  }
}

// checkAnswer('India', 'New Delhi');
// checkAnswer('USA', 'Washington');

// const capitals = [
//   {
//     question: 'India',
//     answer: 'New Delhi',
//   },
//   {
//     question: 'USA',
//     answer: 'Washington',
//   },
// ];

// function checkGame(questions) {
//   for (let i = 0; i < questions.length; i++) {
//     checkAnswer(questions[i].question, questions[i].answer);
//   }

//   alert(`Final Score: ${score}`);
// }

// // checkGame(capitals);

// //template literals

// let username = 'Kishore';

// console.log('Hi', username);
// console.log('Hi ' + username);
// console.log(`Hi ${username}`);

let result = '';

function playGame(user) {
  let comp = getCompInput();

  if (user === 'rock') {
    if (comp === 'rock') {
      result = 'draw';
    } else if (comp === 'paper') {
      result = 'lose';
    } else if (comp === 'scissors') {
      result = 'win';
    }
  } else if (user === 'paper') {
    if (comp === 'rock') {
      result = 'win';
    } else if (comp === 'paper') {
      result = 'draw';
    } else if (comp === 'scissors') {
      result = 'lose';
    }
  } else if (user === 'scissors') {
    if (comp === 'rock') {
      result = 'lose';
    } else if (comp === 'paper') {
      result = 'win';
    } else if (comp === 'scissors') {
      result = 'win';
    }
  }

  return result;
}

function getCompInput() {
  let computerInput = '';

  let randomNumber = Math.trunc(Math.random() * 3);

  if (randomNumber === 0) {
    computerInput = 'rock';
  } else if (randomNumber === 1) {
    computerInput = 'paper';
  } else if (randomNumber === 2) {
    computerInput = 'scissors';
  }

  return computerInput;
}

console.log(playGame('rock'));
console.log(playGame('paper'));
console.log(playGame('rock'));
console.log(playGame('scissors'));
console.log(playGame('rock'));
console.log(playGame('paper'));
