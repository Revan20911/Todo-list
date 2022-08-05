
import init from './modules/domElements';

const render = (() => {

    let form = document.querySelector('.modal');

    const projectArray = JSON.parse(localStorage.getItem('projectArray')) || [];
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    let _List = document.querySelector('.list-box');

    init(form, _List, todos, projectArray);
})();





