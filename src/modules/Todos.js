
import listeners from "./listeners";
import { createTodoItem } from "./elements";

const todoDom = ((form, _List, todos) => {


    

    
    form.setAttribute('data', 'todo');

    function show(){

        clearList(_List);
        addButton();

        todos.forEach((todo) => {
            createTodoItem(_List, todo, todos, 'todos');
        });

    }
    show();
    
    function clearList (parent){

        while(parent.firstChild){
 
         parent.removeChild(parent.firstChild);
 
        }
 
     }

     function addButton(){

        let button = document.createElement("button");
        button.className = "nav-button"
        button.id = "add-todo";
        button.innerHTML = "Add Todo";
        _List.appendChild(button);

       listeners(button, form);

    }
});

export {todoDom};