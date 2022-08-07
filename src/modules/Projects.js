
import { createProjectItem , clearList} from "./Elements.js";


const projectDom = ((form, _List, _side, projectArray) =>{

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

    // Creates add button.
    function addButton(){
        let button = document.createElement("button");
        button.className = "nav-button";
        button.id = "add-project";
        button.innerHTML = '<i class="fa-solid fa-plus"></i>Add Project';
        button.addEventListener('click', () => {

            form.setAttribute('data', 'project');
            form.style.display = "flex";
        })
        

        _side.appendChild(button);
        
    }

    return {
        show,
    };

});

export {projectDom};