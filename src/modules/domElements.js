import { addProject, addTodo } from "./Functions";
import {projectDom} from './Projects';
import { todoDom } from "./Todos";


const init = ((form, _List, todos, projectArray) =>{

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
        
            if(form.hasAttribute('data', 'todos')){
        
                addProject();
        
            }else if(form.hasAttribute('data', 'project')){
        
                addTodo();
            }
        
          cancel();
        
        }


        function renderProjects (){

            projectDom(form, _List, projectArray);
        
        }
        
        function renderTodos(){
        
            todoDom(form, _List, todos);
        }
        
});


export default init;








