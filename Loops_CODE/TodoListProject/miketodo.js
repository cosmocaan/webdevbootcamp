
// add - 
// delete - delete text
// list - list todo index
// quit - quit the todo app

let input = prompt("What do you want to do?");
const todos = ['empty', 'empty2'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*********************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*********************')
    } else if (input === 'new') {
        const newTodo = prompt("Enter your new task.");
        todos.push(newTodo);
        console.log(`${newTodo} was added for a new task!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt("Enter the index of the task to delete."))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Task ${deltask} has been deleted.`);
    } else { console.log('Unknown index.') }
    let input = prompt("What do you want to do?");
}
console.log("Quitting!")



// while (input != "quit") {
//     if (input != '') {
//         prompt("Wat do you want to do?")
//     console.log(input) 
//     }
   
// } 
// console.log("Alright, quitting the app!") break;



