
import render from './modules/domElements';

const init = (() => {

    let form = document.querySelector('.modal');

    const projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    let _List = document.querySelector('.todo-content');

    let _side = document.querySelector('#my-projects');

    render(form, _List, _side, todos, projectArray);

})();





