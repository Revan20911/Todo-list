import listeners from "./listeners";
import { createProjectItem , createTodoItem} from "./elements";


const projectDom = ((form, _List, _side, projectArray) =>{

    form.setAttribute('data', 'project');

    function show(){

        clearList(_side);
        addButton();

        if(projectArray.length > 0){

            projectArray.forEach((project) => {

                createProjectItem(_side, _List, project, projectArray, 'projectArray', form);
             

             });
        }

        Array.from(_side).forEach((todo) => {




        })
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

        _side.appendChild(button);
        listeners(button, form);
    }

});

export {projectDom};