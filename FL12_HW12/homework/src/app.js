const list = document.getElementById('list');
const input_term = document.getElementById('input_term');
const input_def = document.getElementById('input_def');
const clear = document.getElementById('btn_clear');
const input = document.getElementById('btn_input');
let toDo, edit, trash;
let LIST = [];
let id = 0;

function addToDo(toDO, id, edit, trash) {

    if ( trash ) { 
        return; 
    }

    if ( edit ) { 
        document.getElementById('input_term').innerHTML = input_term; 
        document.getElementById('input_def').innerHTML = input_def;
    }

    const text = `<li class='item'>
                        <p class='text'> ${toDO} </p>
                        <i class='fa fa-pencil-square' job='edit'></i> 
                        <i class='de fa fa-trash-o' job='delete' id='${id}'></i>
                  </li>`;

    const position = 'beforeend';
    list.insertAdjacentHTML(position, text);
}

document.addEventListener('keyup', function(event){
    const ENTERCODE = 13;
    if (event.keyCode === ENTERCODE){
        const toDO = input_term.value + ' ' + input_def.value;
        if (toDO) {
            addToDo(toDO, id, false, false);

            LIST.push(
                {
                    name: toDo,
                    id: id,
                    edit: false,
                    trash: false
                }
            );
        }
        input_term.value = '';
        input_def.value = '';
        id++;
    }
}
)

list.addEventListener('click', function(event) {
            let element = event.target;
            const elementJOB = event.target.attributes.job.value;
            if ( elementJOB === 'edit') {
            editToDo(element);
            } else if ( elementJOB === 'delete' ) {
            removeToDO(element);
            }

});

function removeToDO(element) {
        element.parentNode.parentNode.removeChild(element.parentNode);
        LIST[element.id].trash = true;
}

function editToDo() {
    console.log('dsdsds');
    document.getElementById('input_term').innerHTML = 'hhhS'; 
    document.getElementById('input_def').innerHTML = 'hhhS';

}



localStorage.setItem('key', 'value');

let variable = localStorage.getItem('key');

localStorage.setItem('TODO', JSON.stringify(LIST));

let data = localStorage.getItem('TODO');

function loadToDo(array) {

    array.forEach(function(item){
        addToDo(item.name, item.id, item.edit, item.trash);
    }
    );
} 

if(data){
    LIST = JSON.parse(data);
    loadToDo(LIST);
    id = LIST.length;
} else {
    LIST = [];
    const ZERO = 0;
    id = ZERO;
}

document.getElementsByClassName('btn_clear').addEventListener('click', function(){
    localStorage.clear();
    location.reload();
});