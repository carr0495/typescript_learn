var _a;
var container = document.getElementById("container");
//destructing examples:
var a = 1;
var b = 5;
//quick way to swap values
_a = [b, a], a = _a[0], b = _a[1];
var todo = {
    id: 123,
    title: "pick up drycleaning",
    completed: false,
};
var id = todo.id, title = todo.title, completed = todo.completed;
function countdown(_a) {
    var initial = _a.initial, _b = _a.final, final = _b === void 0 ? 0 : _b, _c = _a.interval, interval = _c === void 0 ? 1 : _c, current = _a.initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
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
