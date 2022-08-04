
import listeners from "./listeners";
class Project{
    constructor (id, name, description) {

        this.id = id;
        this.name = name;
        this.description = description;

    }

    
}


const projectDom = (() =>{

    let form = document.querySelector(".modal");

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    let _projectList = document.querySelector('.list-box');

    let box = [];

    clearList(_projectList); 

    addButton();

    if(projects.length > 0){

        projects.forEach((project) => {

            let pbox = document.createElement("div");
            pbox.className = "pbox";
    
            let pName = document.createElement("h2");
            pName.innerHTML = project.name;
    
            let pInfo = document.createElement("p");
            pInfo.innerHTML = project.info;

            box.push('');
    
    
            _projectList.appendChild(pbox);
            pbox.appendChild(pName);
            pbox.appendChild(pInfo);
            
        });

    }

    

    function addProject (){

        const newP = new Project;

        let name = document.querySelector('#name');
        newP.name = name;

        let id = document.querySelector('#itemId');
        newP.id = id;

        let description = document.querySelector("#description");
        newP.description = description;

        projects.push(newP);
        localStorage.setItem('projects', JSON.stringify(projects));

        submitForm.style.displaye = "none";

    }

    function clearList (parent){

       while(parent.firstChild){

        parent.removeChild(parent.firstChild);

       }

    }


    function deleteProject(){




    }


    function addButton(){

        let button = document.createElement("button");
        button.className = "nav-button"
        button.id = "add-project";
        button.innerHTML = "Add Project";

        _projectList.appendChild(button);

        listeners(button, form);
    }
        
    
    return{

        _projectList
    };


})

class Todo{
    constructor (id, name, description) {

        this.id = id;
        this.name = name;
        this.description = description;
    }
}


const todoDom = (() => {

    let form = document.querySelector(".modal");

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    let _todoList = document.querySelector('.list-box');

    clearList(_todoList);

    addButton();


    todos.forEach((todo) => {


        let tbox = document.createElement("div");
        tbox.className = "pbox";

        let tName = document.createElement("h2");
        tName.innerHTML = todo.name;

        let tInfo = document.createElement("p");
        tInfo.innerHTML = todo.info;


        _todoList.appendChild(tbox);
        tbox.appendChild(tName);
        tbox.appendChild(tInfo);


    })

    function clearList (parent){

        while(parent.firstChild){
 
         parent.removeChild(parent.firstChild);
 
        }
 
     }

     function addButton(){

        let button = document.createElement("button");
        button.className = "nav-button"
        button.id = "add-project";
        button.innerHTML = "Add Project";

       


        _todoList.appendChild(button);

        listeners(button, form);

    }



    return {
        _todoList
    };

})



export {projectDom, todoDom};