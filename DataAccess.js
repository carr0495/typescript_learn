System.register([], function (exports_1, context_1) {
    "use strict";
    var _lastId, TodoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            _lastId = 0;
            TodoService = /** @class */ (function () {
                function TodoService(todos) {
                    this.todos = todos;
                }
                Object.defineProperty(TodoService.prototype, "nextId", {
                    get: function () {
                        return (TodoService._lastId += 1);
                    },
                    enumerable: false,
                    configurable: true
                });
                TodoService.prototype.add = function (todo) {
                    todo.id = this.nextId;
                    this.todos.push(todo);
                    return todo;
                };
                TodoService.prototype.delete = function (todoId) {
                    var toDelete = this.getById(todoId);
                    var deletedIndex = this.todos.indexOf(toDelete);
                    this.todos.splice(deletedIndex, 1);
                };
                TodoService.prototype.getAll = function () {
                    var clone = JSON.stringify(this.todos);
                    return JSON.parse(clone);
                };
                TodoService.prototype.getById = function (todoId) {
                    var filtered = this.todos.filter(function (x) { return x.id == todoId; });
                    if (filtered.length) {
                        return filtered[0];
                    }
                    return null;
                };
                TodoService._lastId = 0;
                return TodoService;
            }());
        }
    };
});
