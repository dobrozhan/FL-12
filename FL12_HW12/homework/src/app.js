let list = document.getElementById('list');
let input = document.getElementById('btn_input');
let toDo, edit, trash;
let LIST = [];
let id = 0;

window.location.hash = '#/main';

switch(location.hash){
    case '#/main':
        document.getElementById('wrapper_new_set').style.display = 'none';
        document.getElementById('wrapper_modify_set').style.display = 'none';
        const newButton = document.getElementById('btnInput');
        newButton.addEventListener('click', () => {window.location.hash = '#/set'; setHash()});
        break;
    case '#/set':
        document.getElementById('wrapper_main').style.display = 'none';
        document.getElementById('wrapper_modify_set').style.display = 'none';
        console.log('hello');
      // code block
        break;
    case '#/modify':
        document.getElementById('wrapper_main').style.display = 'none';
        document.getElementById('wrapper_new_set').style.display = 'none';
        // code block
        break;
    default:
        break;
  }

  function setHash() {
    console.log('hello');
    document.getElementById('wrapper_new_set').style.display = 'block';
    document.getElementById('wrapper_main').style.display = 'none';
    const addTerms = document.getElementById('addTerms');
    addTerms.addEventListener('click', () => termDefBlock());
  }

  function termDefBlock() {
    document.getElementById('term').style.display = 'block';
    document.getElementById('def').style.display = 'block';
    document.getElementById('remove').style.display = 'block';
  }


function addToDo(toDO, id, edit, trash) {

    if (trash) { 
        return; 
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


input.addEventListener('click', console.log('hello'));

list.addEventListener('click', function(event){
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