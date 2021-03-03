namespace TodoApp.Model {
  export interface Todo {
    id: number;
    name: string;
    state: TodoState;
  }
  export enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted,
  }
}

namespace DataAccess {
  import Todo = TodoApp.Model.Todo;

  export interface ITodoService {
    add(todo: Todo): Todo;
    delete(todoId: number): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
  }
}
