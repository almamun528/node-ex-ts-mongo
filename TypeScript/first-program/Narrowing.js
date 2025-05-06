// Narrowing
// ! when false value come it will loop to print the todos
function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todos ");
    }
}
var todos = ["todo", "todo1", "todo2", "todo3"];
printTodos(null);
