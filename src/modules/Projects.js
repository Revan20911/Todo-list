import listeners from "./listeners";
import { createProjectItem , createTodoItem} from "./elements";


const projectDom = ((form, _List, _side, projectArray) =>{


    //TODO: Have the project store local todo items in a data-structure and then store the items locally.
    //TODO: Have the project call the locally stored todos and render them on the main page. 



    form.setAttribute('data', 'project');

    function show(){

        clearList(_side);
        addButton();

        if(projectArray.length > 0){

            projectArray.forEach((project) => {
            
                // Renders a DOM item for each project. 

                createProjectItem(_side, _List, project, projectArray, 'projectArray', form);
             

             });
        }

    }

    show();
    
    //Clears page each time the module is initialized. 

    function clearList (parent){

       while(parent.firstChild){

        parent.removeChild(parent.firstChild);

       }

    }

    // Creates add button.

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