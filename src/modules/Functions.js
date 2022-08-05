import {Project, Todo} from './Classes';


function addProject (_List, _arr, _arrStr){

    let pbox = document.createElement("div");
    pbox.className = "pbox";

    const name = document.querySelector('#name').value;
    let pName = document.createElement("h2");
    pName.innerHTML = name;
    
    const id = document.querySelector('#itemId');
    
    const description = document.querySelector("#description").value;
    let pInfo = document.createElement("p");
    pInfo.innerHTML = description;

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";

    // const completed = document.querySelector('#completed').value;
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    delbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const newP = new Project(null, name, description);
    _arr.push(newP);
    localStorage.setItem(_arrStr, JSON.stringify(_arr));

    _List.appendChild(pbox);
    pbox.appendChild(pName);
    pbox.appendChild(pInfo);
    pbox.appendChild(buttonDiv);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _List.removeChild(pbox);
        _arr.splice(pbox, 1);
        localStorage.setItem(_arrStr, JSON.stringify(_arr));
    });

    console.log('Project Added Successfully');
  
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

    let buttonDiv = document.createElement('div');
    buttonDiv.className = "bdiv";

    // const completed = document.querySelector('#completed').value;
    let pCompleted = document.createElement('input');
    pCompleted.type = "checkbox";

    let delButton = document.createElement("button");
    delButton.id = "del";
    
    delButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const newT = new Todo(null, name, description);
    _arr.push(newT);
    localStorage.setItem(_arrStr, JSON.stringify(_arr));

   

    _List.appendChild(tbox);
    tbox.appendChild(tName);
    tbox.appendChild(tInfo);
    tbox.appendChild(buttonDiv);
    buttonDiv.appendChild(pCompleted);
    buttonDiv.appendChild(delButton);
    buttonDiv.appendChild(delButton).addEventListener('click', () => {

        _List.removeChild(tbox);
        _arr.splice(tbox, 1);
        localStorage.setItem(_arrStr, JSON.stringify(_arr));
    });

    

    console.log('Todo Added Successfully');
  
}

export {addProject, addTodo};