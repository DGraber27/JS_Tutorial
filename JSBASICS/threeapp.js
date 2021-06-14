//Logical Operators
//(|| - OR), (&& - AND), !

const _name = "peter";
const age = 24;

if (_name === "bob" || age === 24) {
  console.log("hello user");
} else {
  console.log("wrong values");
}

if (_name === "bob" && age === 24) {
  console.log("hello user");
} else {
  console.log("wrong values");
}

//Switch
//dice values: 1-6

const dice = 1;
switch (dice) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("cocked");
    break;
}

//else if
// if(dice === 1) {
//  console.log('you got 1');
// }
// else if (dice === 2) {
//   console.log("you got 1");
// }
// else {
//  console.log('cocked');
// }

// if(dice === 1) {
//  console.log('you got 1');
// }
// if (dice === 2) {
//   console.log("you got 1");
// }
// if (dice < 1 || dice > 6) {
//   console.log("cocked");
// }

//Loops
//repeatedly run a block of code while condition is true
//while loop
//Turn Off Autosave
//const don't always work
let amount = 10;

while (amount > 0) {
  console.log("I have " + amount + " dollars and I am going to the mall");
  amount--;
}

//do while
//code block first, condition second
//runs at least once

let money = 0;

do {
  console.log("you have " + money + " dollars");
  money++;
} while (money <= 10);

let money1 = 12;

do {
  console.log("you have " + money1 + " dollars");
  money1++;
} while (money1 <= 10);

//for loop

// let i;
// for (i = 0; i < 10; i++) {
//   console.log("and the number is : " + i);
// }
for (let number = 11; number >= 0; number--) {
  console.log("and the number is : " + number);
}
