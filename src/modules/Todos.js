
import { createTodoItem, clearList } from "./Elements.js";

const todoDom = ((form, _List, todos) => {

    function show(){

        clearList(_List);
        addButton();

        todos.forEach((todo) => {
            createTodoItem(_List, todo, todos, 'todos');
        });

    }
    show();

     function addButton(){

        let button = document.createElement("button");
        button.className = "nav-button"
        button.id = "add-todo";
        button.innerHTML = '<i class="fa-solid fa-plus"></i>Add Todo';

        button.addEventListener('click', () => {

            form.setAttribute('data', 'todo');
            form.style.display = "flex";
        });
        _List.appendChild(button);

    }
});

export {todoDom};