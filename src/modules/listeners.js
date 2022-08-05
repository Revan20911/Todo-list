

const listeners  = ((button, form) =>{

    button.addEventListener('click', add);

    function add(){

        form.style.display = "flex";
    }

})

export default listeners;


