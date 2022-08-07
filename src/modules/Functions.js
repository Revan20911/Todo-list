import {Project, Todo} from './Classes';


// These functions get called when hitting the submit button for their respective pages.


function addProject (_side, _List, _arr, _arrStr, form){


    const name = document.querySelector('#name').value;
    let pName = document.createElement("h2");
    pName.innerHTML = name;

    const description = document.querySelector("#description").value;
    let pInfo = document.createElement("p");
    pInfo.innerHTML = description;

    let pbox = document.createElement("div");
    pbox.className = "pbox";
    pbox.setAttribute('tabindex', '1');

    const date = document.querySelector("#dueDate").value;

    let dDate = document.createElement("label");
    dDate.innerHTML = date;
    
    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";

    // const completed = document.querySelector('#completed').value;
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delButton.id = "add-task";

    let newTask = document.createElement("button");
    newTask.innerHTML = '<i class="fa-solid fa-plus"></i>';
    newTask.id = "add-task";

    const projectId = name;

    let pTasks = document.createElement("div");
    pTasks.className = "list-box";
    pTasks.id = projectId;

    const newP = new Project(projectId, name, description);
    _arr.push(newP);
    localStorage.setItem(_arrStr, JSON.stringify(_arr));

    _side.appendChild(pbox);

    pbox.appendChild(pTasks);
    pbox.appendChild(pName);
    pbox.appendChild(pInfo);
    pbox.appendChild(buttonDiv);
    buttonDiv.appendChild(pCompleted);
    
    buttonDiv.appendChild(newTask);
    buttonDiv.appendChild(newTask).addEventListener('click', () => {

        form.setAttribute('data', projectId);
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

    buttonDiv.appendChild(dDate);

    console.log('Project Added Successfully');
  
}


function getId (max, min){

    return Math.floor(Math.random() * (max - min));
}

function addTodo (_List, _arr, _arrStr){

   
    let tbox = document.createElement("div");
    tbox.className = "pbox";

    const name = document.querySelector('#name').value;
    let tName = document.createElement("h2");
    tName.innerHTML = name;
    
    const id = document.querySelector('#itemId');
    
    const description = document.querySelector("#description").value;
    let tInfo = document.createElement("p");
    tInfo.innerHTML = description;

    const priority = document.querySelector("#priority").value;
    let tPriority = document.createElement("label");
    tPriority.innerHTML = priority;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";

    // const completed = document.querySelector('#completed').value;
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    delButton.id = "del";

    const date = document.querySelector("#dueDate").value;
    let dDate = document.createElement("label");
    dDate.innerHTML = date;
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const newT = new Todo(null, name, description, null, priority, date);
    _arr.push(newT);
    localStorage.setItem(_arrStr, JSON.stringify(_arr));

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

    buttonDiv.appendChild(dDate);

    

    console.log('Todo Added Successfully');
  
}



function addProjectTodo (_List, project,){

    const p = JSON.parse(localStorage.getItem(toString(project.id)));

    let tbox = document.createElement("div");
    tbox.className = "pbox";

    const name = document.querySelector('#name').value;
    let tName = document.createElement("h2");
    tName.innerHTML = name;
    
    const description = document.querySelector("#description").value;
    let tInfo = document.createElement("p");
    tInfo.innerHTML = description;

    const priority = document.querySelector("#priority").value;
    let tPriority = document.createElement("label");
    tPriority.innerHTML = priority;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";

    const date = document.querySelector("#dueDate").value;
    let dDate = document.createElement("label");
    dDate.innerHTML = date;

    // const completed = document.querySelector('#completed').value;
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    delButton.id = "del";
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    let taskId = project.id;

    const newT = new Todo(taskId, name, description, null, priority, date);
    p.push(newT);
    localStorage.setItem(toString(project.id), JSON.stringify(p));

    _List.appendChild(tbox);
    tbox.appendChild(tName);
    tbox.appendChild(tInfo);
    tbox.appendChild(buttonDiv);
    buttonDiv.appendChild(tPriority);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _List.removeChild(tbox);
        p.splice(tbox, 1);
        localStorage.setItem(toString(project.id), JSON.stringify(p));
    });

    buttonDiv.appendChild(dDate);

    

    console.log('Project Todo Added Successfully');
  
}


export {addProject, addTodo, addProjectTodo};