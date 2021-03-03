import { Todo } from "./model";

let _lastId: number = 0;

export interface ITodoService {
  add(todo: Todo): Todo;
  delete(todoId: number): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
}

class TodoService implements ITodoService {
  private static _lastId: number = 0;

  get nextId() {
    return (TodoService._lastId += 1);
  }
  constructor(private todos: Todo[]) {}

  add(todo: Todo) {
    todo.id = this.nextId;
    this.todos.push(todo);
    return todo;
  }
  delete(todoId: number): void {
    let toDelete = this.getById(todoId);
    let deletedIndex = this.todos.indexOf(toDelete);
    this.todos.splice(deletedIndex, 1);
  }
  getAll(): Todo[] {
    let clone = JSON.stringify(this.todos);
    return JSON.parse(clone);
  }
  getById(todoId: number): Todo {
    let filtered = this.todos.filter((x) => x.id == todoId);

    if (filtered.length) {
      return filtered[0];
    }
    return null;
  }
}
