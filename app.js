function clone(value) {
    var serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}
clone("Hello");
clone(123);
//controlling visibility with access modifiers
// interface Todo {
//   name: string;
//   state: TodoState;
// }
// enum TodoState {
//   New = 1,
//   Active,
//   Complete,
//   Deleted,
// }
//private is most restrictive-can only be used inside class //
//protected is the same as private, but can be accesed in any inhertied classes
//public is accessible through definition
// class TodoService {
//   static lastId: number = 0;
//   constructor(protected todos: Todo[]) {}
//   private get nextId() {
//     return TodoService.getNextId();
//   }
//   private set nextId(nextId) {
//     TodoService.lastId = nextId - 1;
//   }
//   add(todo: Todo) {
//     let newId = this.nextId;
//   }
//   getAll() {
//     return this.todos;
//   }
//   static getNextId() {
//     return (TodoService.lastId += 1);
//   }
// }
//inheriting behaviour from abase class //adding abstract classes
// interface Todo {
//   name: string;
//   state: TodoState;
// }
// enum TodoState {
//   New = 1,
//   Active,
//   Complete,
//   Deleted,
// }
// abstract class TodoStateChanger {
//   constructor(private newState: TodoState) {}
//   abstract canChangeState(todo: Todo): boolean;
//   changeState(todo: Todo): Todo {
//     if (this.canChangeState(todo)) {
//       todo.state = this.newState;
//     }
//     return todo;
//   }
// }
// class CompleteTodoStateChanger extends TodoStateChanger {
//   //if you dont make a constructor, it will use parents constructor.
//   constructor() {
//     super(TodoState.Complete);
//   }
//   canChangeState(todo: Todo): boolean {
//     return (
//       !!todo &&
//       (todo.state == TodoState.Active || todo.state == TodoState.Deleted)
//     );
//   }
// }
//TS smarter accessors
// interface Todo {
//   name: string;
//   state: TodoState;
// }
// enum TodoState {
//   New = 1,
//   Active,
//   Complete,
//   Deleted,
// }
// class SmartTodo {
//   _state: TodoState;
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   get state() {
//     return this._state;
//   }
//   set state(newState) {
//     if (newState == TodoState.Complete) {
//       let canBeCompleted =
//         this.state == TodoState.Active || this.state == TodoState.Deleted;
//       if (!canBeCompleted) {
//         throw "todo must be active or deleted in order to be marked Completed";
//       }
//     }
//     this._state = newState;
//   }
// }
// let todo = new SmartTodo("Pick up Drycleaning");
// todo.state = TodoState.Complete;
//TS static properties
// class TodoService {
//   static lastId: number = 0;
//   constructor(private todos: Todo[]) {}
//   add(todo: Todo) {
//     let newId = TodoService.getNextId();
//   }
//   getAll() {
//     return this.todos;
//   }
//   static getNextId() {
//     return (TodoService.lastId += 1);
//   }
// }
// interface Todo {
//   name: string;
//   state: TodoState; //optional
// }
// enum TodoState {
//   New = 1,
//   Active,
//   Complete,
//   Deleted,
// }
//class syntax
// class TodoService {
//   constructor(private todos: Todo[]) {}
//   getAll() {
//     return this.todos;
//   }
// }
// interface Todo {
//   name: string;
//   completed?: boolean; //optional
// }
//anonymous typesw with typescript
// let todo: { name: string };
// // todo = {age: 41}
// function totalLength(x: { length: number }, y: { length: number }): number {
//   let total: number = x.length + y.length;
//   return total;
// }
//Enums with constant values;
// interface Todo {
//   name: string;
//   state: TodoState;
// }
// //must be declared at top
// enum TodoState {
//   New = 1,
//   Active,
//   Complete,
//   Deleted,
// }
// let todo: Todo = {
//   name: "pick up drycleaning",
//   state: TodoState.New,
// };
// var container = document.getElementById("container");
//functions and interfaces together
// interface Todo {
//   name: string;
//   completed?: boolean; //optional
// }
// interface jQuery {
//   (selector: string | any): jQueryElement;
//   fn: any;
//   version: number;
// }
// interface jQueryElement {
//   data(name: string): any;
//   data(name: string, data: any): jQueryElement;
// }
// interface jQueryElement {
//   todo(): Todo;
//   todo(todo: Todo): jQueryElement;
// }
// var $ = <jQuery>function (selector) {
//   //find DOM element
// };
// $.fn.todo = function (todo?: Todo): Todo {
//   if (todo) {
//     $(this).data("todo", todo);
//   } else {
//     return $(this).data("todo");
//   }
// };
// let todo = { name: "pick up drycleaning" };
// let container = $("#container");
// container.data("todo", todo);
// let savedTodo = container.data("todo");
// container.todo(todo);
// var $ = <jQuery>function (selector) {
//   //find DOM element
// };
// var element = $("container");
// element.id
// element.innerHTML
//custom types in typescript
//interfaces, classes and enums
//not visible at runtime
// interface Todo {
//   name: string;
//   completed?: boolean; //optional
// }
// interface ITodoService {
//   add(todo: Todo): Todo;
//   delete(todoId: number): void;
//   getAll(): Todo[];
//   getById(todoId: number): Todo;
// }
// var todo: Todo = { name: "Aiden", completed: false };
// //function overloads in typescript
// function totalLength(x: string, y: string): number;
// function totalLength(x: any[], y: any[]): number;
// function totalLength(x: string | any[], y: string | any[]): number {
//   let total: number = x.length + y.length;
//   x.slice(0);
//   //check the types of your variables.
//   if (x instanceof Array) {
//     x.push("abc");
//   }
//   if (x instanceof String) {
//     x.substr(1);
//   }
//   return total;
// }
//totalLength();
//TS specifying types
//take guessing out of typescript weith union types
// function totalLength(x: string | any[], y: string | any[]): number {
//   let total: number = x.length + y.length;
//   x.slice(0);
//   //check the types of your variables.
//   if (x instanceof Array) {
//     x.push("abc");
//   }
//   if (x instanceof String) {
//     x.substr(1);
//   }
//   return total;
// }
//typescript - type inference
// let animal = {
//   name: "fido",
//   species: "dog",
//   age: 5,
//   speak: function () {
//     console.log("Woof!");
//   },
// };
// function calculateAge(birthYear) {
//   return Date.now() - birthYear;
// }
// function totalLength(x, y): number {
//     let total = x.length + y.length;
//     return total;
// }
//the spread operator - review
// function calculate(action, ...values) {
//   let total = 0;
//   for (var value of values) {
//     switch (action) {
//       case "add":
//         total += value;
//         break;
//       case "subtract":
//         total -= value;
//         break;
//       default:
//         break;
//     }
//   }
//   return total;
// }
// calculate('subtract',1, 2, 3, 5);
// let source = [3,4,5];
// let target = [1,2,...source,6,7,8];
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
