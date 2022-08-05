
import render from './modules/domElements';

const init = (() => {

    let form = document.querySelector('.modal');

    const projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    let _List = document.querySelector('.list-box');

    render(form, _List, todos, projectArray);

})();





