// Narrowing
// ! when false value come it will loop to print the todos
function printTodos(todos: string[] | null) {
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("no todos ");
  }
}

const todos = ["todo", "todo1", "todo2", "todo3"];
printTodos(null);
