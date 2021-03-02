var container = document.getElementById("container");

//the spread operator - review

function calculate(action, ...values) {
  let total = 0;

  for (var value of values) {
    switch (action) {
      case "add":
        total += value;
        break;
      case "subtract":
        total -= value;
        break;
      default:
        break;
    }
  }
  return total;
}

calculate(1, 2, 3, 5);

// //destructing examples:

// let a = 1;
// let b = 5;

// //quick way to swap values
// [a, b] = [b, a];

// let todo = {
//   id: 123,
//   title: "pick up drycleaning",
//   completed: false,
// };

// let { id, title, completed } = todo;

// function countdown({
//   initial,
//   final: final = 0,
//   interval: interval = 1,
//   initial: current,
// }) {
//   while (current > final) {
//     container.innerHTML = current;
//     current -= interval;
//   }
// }

// let array = [
//     "pick up drycleaning",
//     "Clean batcave",
//     "Save Gotham"
// ]

// for (const index in array) {

// }

//lesson 4 - Let and const

// for (let x = 0; x <= 5; x++) {
//   let counter = x;
// }
// console.log(counter);

// lesson 3 - template strings
// let todo = {
//   id: 123,
//   name: "pick up drycleaning",
//   completed: true,
// };

// container.innerHTML = `<div todo=${todo.id} class="list-group-item}">
// <i class="${
//   todo.completed ? "" : "hidden"
// } text-success glyphicon glyphicon-ok"></i>
// <span class="name">${todo.name}</span>
// </div>`;

// let displayName = `Todo#${todo.id}`;

// lesson 2 - Default Parameters
// function countdown(initial, final = 0, interval = 1) {
//   let current = initial;
//   while (current > final) {
//     container.innerHTML = current;
//     current -= interval;
//   }
// }

// countdown(10, 4, 2);
