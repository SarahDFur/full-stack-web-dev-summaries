// version 1:
/*
const todoList = []; // empty array

function addTodo() {
    const inputElem = document.querySelector('.js-name-input')
    const name = inputElem.value;

    todoList.push(name);
    console.log(todoList);

    inputElem.value = '';
}
*/

// version 2: with loop
/*
const todoList1 = ['make dinner', 'wash dishes']; 
renderTodoList();


function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList1.length; i++) {
        const todo = todoList1[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}

function addTodo() {
    const inputElem = document.querySelector('.js-name-input')
    const name = inputElem.value;

    todoList1.push(name);
    console.log(todoList1);

    inputElem.value = '';

    renderTodoList();
}
*/

// version 3: final version
const todoList1 = [
    {
        name: 'make dinner',
        dueDate: '2022-12-22'
    }, 
    {
        name: 'wash dishes',
        dueDate: '2022-12-22'
    }
]; 

renderTodoList();


function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList1.length; i++) {
        const todoObject = todoList1[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        // const html = `
        //     <p>
        //         ${name} ${dueDate} 
        //         <button onclick="
        //             todoList.splice(${i}, 1);
        //             renderTodoList();
        //         ">Delete</button>
        //     </p>
        // `;
        const html = `
            <div>${name}</div> 
            <div>${dueDate}</div> 
            <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
            " class="delete-todo-button"
            >Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}

function addTodo() {
    const inputElem = document.querySelector('.js-name-input')
    const name = inputElem.value;

    const dateInputElem = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElem.value;

    todoList1.push(
        {
            // name: name, 
            // dueDate: dueDate,
            name,
            dueDate
        } 
    );

    inputElem.value = '';

    renderTodoList();
}