import listeners from "./listeners";

const projectDom = ((form, _List, projectArray) =>{

   
    form.setAttribute('data', 'project');

    function show(){

        clearList(_List);


        addButton();

        if(projectArray.length > 0){

            projectArray.forEach((project) => {
    
                let pbox = document.createElement("div");
                pbox.className = "pbox";
        
                let pName = document.createElement("h2");
                pName.innerHTML = project.name;
        
                let pInfo = document.createElement("p");
                pInfo.innerHTML = project.info;
        
                _List.appendChild(pbox);
                pbox.appendChild(pName);
                pbox.appendChild(pInfo);
    
                console.log(projectArray);   
             });
        }
    }

    show();
    

   

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

        _List.appendChild(button);
        listeners(button, form);
    }

});

export {projectDom};