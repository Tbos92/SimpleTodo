let input = prompt(
  "What would you like to do? See webpage for a list of commands"
);

const todos = ["Collect eggs", "Clean litter box"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*********************");
    for (i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*********************");
  } else if (input === "new") {
    const newTodo = prompt("Okay, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (input === "delete") {
    const indexStr = parseInt(
      prompt("What is the index of the list item you want to delete?")
    );
    if (!Number.isNaN(index)) {
      deletedItem = todos.splice(index, 1);
      console.log(`${deletedItem[0]} was deleted`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt(
    "What would you like to do? See webpage for a list of commands"
  );
}

console.log("You quit the app");
