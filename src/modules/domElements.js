import { addProject, addTodo, addProjectTodo } from "./Functions.js";
import {projectDom} from './Projects';
import { todoDom } from "./Todos.js";


const render = ((form, _List, _side, todos, projectArray) =>{
        
        // Constant DOM ID's

        renderProjects();

        let t = document.querySelector('#todos');
        t.addEventListener('click', renderTodos);
        
        let c = document.querySelector('#cancel');
        c.addEventListener('click', cancel);
        
        function cancel (){
        
            form.style.display = "none";
        }
        
        let s = document.querySelector('#submit');
        s.addEventListener('click', submit);
        

        // This function determines what gets created when submit is clicked. 

        function submit(){
        
            if(form.getAttribute('data') == 'todo'){

                addTodo(_List, todos, 'todos');
                cancel();
        
            }
            
            else if(form.getAttribute('data') == "project"){
        
                addProject(_side,_List,  projectArray, 'projectArray', form);
                cancel();
            }
            else if(form.getAttribute('data') != "project" && form.getAttribute('data')!= "todo"){

                projectArray.forEach((project) => { 

                    let list = form.getAttribute('data')

                    if(list === project.name){

                        addProjectTodo(_List, project);
                        renderProjects();
                        console.log('pushed');
                        cancel();                
                    }
                })
            }
        }

        // Rendering Todos and Project pages

        function renderProjects (){

            projectDom(form, _List, _side, projectArray);
        
        }


    
        function renderTodos(){
        
            todoDom(form, _List, todos);
        }

    
        
});

export default render;








