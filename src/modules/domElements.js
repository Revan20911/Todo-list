import { addProject, addTodo, addProjectTodo } from "./Functions.js";
import {projectDom} from './Projects';
import { todoDom } from "./Todos.js";


const render = ((form, _List, _side, todos, projectArray) =>{

        let p = document.querySelector('#project-tab');
        p.addEventListener('click', renderProjects);
        
        let t = document.querySelector('#todos');
        t.addEventListener('click', renderTodos )
        
        let c = document.querySelector('#cancel');
        c.addEventListener('click', cancel);
        
        function cancel (){
        
            form.style.display = "none";
        }
        
        let s = document.querySelector('#submit');
        s.addEventListener('click', submit);
        
        function submit(){
        
            if(form.getAttribute('data') == 'todo'){

                addTodo(_List, todos, 'todos');
                cancel();
        
            }
            
            else if(form.getAttribute('data') == "project"){
        
                addProject(_side, projectArray, 'projectArray', form);
                cancel();
            }
            else if(form.getAttribute('data') != "project" && form.getAttribute('data')!= "todo"){

                projectArray.forEach((project) => {

                    

                    if(form.getAttribute('data') === project.name){

                        addProjectTodo(_List, project);
                        
                        console.log('pushed');

                        
                    }
                })
            }
        }

        function renderProjects (){

            projectDom(form, _List, _side, projectArray);
        
        }
        
        function renderTodos(){
        
            todoDom(form, _List, todos);
        }

    
        
});

export default render;








