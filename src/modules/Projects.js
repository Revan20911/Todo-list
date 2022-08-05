import listeners from "./listeners";
import { createProjectItem } from "./elements";


const projectDom = ((form, _List, projectArray) =>{

   
    form.setAttribute('data', 'project');

    function show(){

        clearList(_List);
        addButton();

        if(projectArray.length > 0){

            projectArray.forEach((project) => {

                createProjectItem(_List, project, projectArray, 'projectArray');

             });
        }
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
        button.id = "add-project";
        button.innerHTML = "Add Project";

        _List.appendChild(button);
        listeners(button, form);
    }

});

export {projectDom};