export const REQUEST_TODOS = "todos/REQUEST_TODOS";
export function requestTodos() {
  return { type: REQUEST_TODOS };
}

export const REPLACE_TODOS = "todos/REPLACE_TODOS";
export function replaceTodos(Todos) {
  return { type: REPLACE_TODOS, todos: Todos };
}

export const REQUEST_ADD_TODO = "todos/REQUEST_ADD_TODO";
export function requestAddTodo(todo) {
  return { type: REQUEST_ADD_TODO, todo };
}

export const ADD_TODO = "todos/ADD_TODO";
export function addTodo(todo) {
  return { type: ADD_TODO, todo };
}

export const REQUEST_UPDATE_TODO = "todos/REQUEST_UPDATE_TODO";
export function requestUpdateTodo(updatedTodo) {
  return { type: REQUEST_UPDATE_TODO, todo: updatedTodo };
}

export const UPDATE_TODO = "todos/UPDATE_TODO";
export function updateTodo(updatedTodo) {
  return { type: UPDATE_TODO, todo: updatedTodo };
}

export const EDIT_TODO = "todos/EDIT_TODO";
export function editTodo(todo) {
  return { type: EDIT_TODO, todo };
}

export const TOGGLE_TODO = "todos/TOGGLE_TODO";
export function searchTodo(title) {
  return { type: TOGGLE_TODO, todo: title };
}

export const REQUEST_DELETE_TODO = "todos/REQUEST_DELETE_TODO";
export function requestDeleteTodo(id) {
  console.log("hola2", id);
  return { type: REQUEST_DELETE_TODO, id: id };
}

export const DELETE_TODO = "todos/DELETE_TODO";
export function deleteTodo(todo) {
  return { type: DELETE_TODO, id: todo.id };
}
