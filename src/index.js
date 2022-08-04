
import * as dom from './modules/domElements';






const init = (() => {

let p = document.querySelector('#project-tab');
p.addEventListener('click', dom.projectDom);

let t = document.querySelector('#todos');
t.addEventListener('click', dom.todoDom);

let form = document.querySelector(".modal");


let c = document.querySelector('#cancel');
c.addEventListener('click', cancel);

function cancel (){

    form.style.display = "none";
}



})();





