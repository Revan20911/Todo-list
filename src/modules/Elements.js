


//TODO: Refactor this and './Functions' into a single module to reduce clutter and make more portable.


const createProjectItem = ((_side, _List, project, _arr, _arrStr,form) => {

    //TODO: Have the project store local todo items in a data-structure and then store the items locally.
    //TODO: Have the project call the locally stored todos and render them on the main page. 
    const arr = JSON.parse(localStorage.getItem(toString(project.id)));   

    let pbox = document.createElement("div");
    pbox.className = "pbox";
    pbox.id = project.id;
    pbox.setAttribute('tabindex', '1');

    if(project.id == null || project.id == ""){

        pbox.id = project.name + project.description;
    }

    let pName = document.createElement("h2");
    pName.innerHTML = project.name;

    let pInfo = document.createElement("p");
    pInfo.innerHTML = project.description;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";
    
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.id="del";

    let newTask = document.createElement("button");
    newTask.innerHTML = '<i class="fa-solid fa-plus"></i>';
    newTask.id = "add-task";

    let pTasks = document.createElement("div");
    pTasks.className = "list-box";
    pTasks.id = project.name + project.description;

    _side.appendChild(pbox);
    _side.appendChild(pbox).addEventListener('click', () => {

        _List.setAttribute('data', project.name);
        clearList(_List);

        _arr.forEach((task) => {

                if(task.id === project.id){

                    createProjectTodoItem(_List, project, task);
                    console.log(project.id, task.id);
                }
                
        })
    });
    pbox.appendChild(pName);
    pbox.appendChild(pInfo);
    pbox.appendChild(buttonDiv);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(pCompleted).addEventListener('checked', () => {

        project.complete = true;

    });

    buttonDiv.appendChild(pCompleted).addEventListener('unchecked', () => {

        project.complete = false;

    });


    buttonDiv.appendChild(newTask);
    buttonDiv.appendChild(newTask).addEventListener('click', () => {

        form.setAttribute('data', pName.innerHTML);
        form.style.display = 'flex';

    });
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _side.removeChild(pbox);

        while(_List.firstChild){

            _List.removeChild(_List.firstChild);
        }
        _arr.splice(pbox, 1);
        localStorage.setItem(_arrStr, JSON.stringify(_arr));
    });
    pbox.appendChild(pTasks).addEventListener('load', ()=> {

        _arr.forEach((task) => {

            if(task.id === project.id){
    
                createProjectTodoItem(pTasks, project, task);
            }  
        })
    });    
});

function clearList (parent){

    while(parent.firstChild){

     parent.removeChild(parent.firstChild);

    }

 }


function createTodoItem(_List, todo, _arr, _arrStr){

    let tbox = document.createElement("div");
    tbox.className = "pbox";
    
    let tName = document.createElement("h2");
    tName.innerHTML = todo.name;
    
    let tInfo = document.createElement("p");
    tInfo.innerHTML = todo.description;

    let tPriority = document.createElement("label");
    tPriority.innerHTML = todo.priority;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";
    
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.id="del";

    let todoDate = document.createElement("label");
    todoDate.innerHTML = todo.date;
    
    _List.appendChild(tbox);
    tbox.appendChild(tName);
    tbox.appendChild(tInfo);
    tbox.appendChild(buttonDiv);
    buttonDiv.appendChild(tPriority);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _List.removeChild(tbox);
        _arr.splice(tbox, 1);
        localStorage.setItem(_arrStr, JSON.stringify(_arr));
    });

    buttonDiv.appendChild(todoDate);

}

function createProjectTodoItem(_List, project, todo){

    let tbox = document.createElement("div");
    tbox.className = "pbox";
    
    let tName = document.createElement("h2");
    tName.innerHTML = todo.name;
    
    let tInfo = document.createElement("p");
    tInfo.innerHTML = todo.description;

    let tPriority = document.createElement("label");
    tPriority.innerHTML = todo.priority;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";
    
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.id="del";

    let todoDate = document.createElement("label");
    todoDate.innerHTML = todo.date;
    
    _List.appendChild(tbox);
    tbox.appendChild(tName);
    tbox.appendChild(tInfo);
    tbox.appendChild(buttonDiv);
    buttonDiv.appendChild(tPriority);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _List.removeChild(tbox);
        project.tasks.splice(tbox, 1);
        localStorage.setItem(toString(project.id), JSON.stringify(project.tasks));
    });
    buttonDiv.appendChild(todoDate);

}


export {createProjectItem, createTodoItem, clearList};
