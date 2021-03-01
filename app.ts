var container = document.getElementById("container");

//template strings
let todo = {
  id: 123,
  name: "pick up drycleaning",
  completed: true,
};

container.innerHTML = `<div todo=${todo.id} class="list-group-item}">
<i class="${
  todo.completed ? "" : "hidden"
} text-success glyphicon glyphicon-ok"></i>
<span class="name">${todo.name}</span>
</div>`;

let displayName = `Todo#${todo.id}`;

// lesson 2 - Default Parameters
// function countdown(initial, final = 0, interval = 1) {
//   let current = initial;
//   while (current > final) {
//     container.innerHTML = current;
//     current -= interval;
//   }
// }

// countdown(10, 4, 2);
