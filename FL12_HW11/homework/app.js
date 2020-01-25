const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');
let filledChild_level_1, filledChild_level_2, filledChild_level_3, emptyChild;

for (let i = 0; i < structure.length; i++) {
  
    filledChild_level_1 = document.createElement('div');
    filledChild_level_1.innerHTML = structure[i].title;
    rootNode.appendChild(filledChild_level_1);

    let iElement = document.createElement('i');
    iElement.classList.add('material-icons','folder-color');  
    filledChild_level_1.prepend(iElement);

    filledChild_level_1.addEventListener('click', function() {
      console.log('level-1');
      filledChild_level_2.classList.add('onclick');
      filledChild_level_3.classList.add('onclick');
      emptyChild.classList.add('onclick');
        });


    if (structure[i].folder === true) {
      iElement.innerHTML = 'folder';
    } else {
      iElement.innerHTML = 'insert_drive_file';
      iElement.classList.add('file-color');
    }

  if (Array.isArray(structure[i].children) === true) {

    let substructure = structure[i].children;
    for (let j = 0; j < substructure.length; j++) {
      filledChild_level_2 = document.createElement('div');
      filledChild_level_2.classList.add('level-2');
      filledChild_level_2.innerHTML = substructure[j].title;
      rootNode.appendChild(filledChild_level_2);

      let iiElement = document.createElement('i');
      iiElement.classList.add('material-icons','folder-color');
      filledChild_level_2.prepend(iiElement);

      if (substructure[j].folder === true) {
        iiElement.innerHTML = 'folder';
        filledChild_level_2.addEventListener('click', function() {
          filledChild_level_3.classList.add('onclick');
          emptyChild.classList.add('onclick');
          console.log('level-2');
          });
      } else {
        iiElement.innerHTML = 'insert_drive_file';
        iiElement.classList.add('file-color');
      }

      if (Array.isArray(substructure[j].children) !== true && substructure[j].folder === true) {
        emptyChild = document.createElement('div');
        emptyChild.innerHTML = 'Folder is empty';
        rootNode.appendChild(emptyChild);
        emptyChild.classList.add('level-empty');

        emptyChild.addEventListener('click', function() {
        console.log('level-empty');
        });
      }

      if (substructure[j].children !== undefined && substructure[j].children !== null) {
        let subsubstructure = substructure[j].children;
      for (let n = 0; n < subsubstructure.length; n++) {
        filledChild_level_3 = document.createElement('div');
        filledChild_level_3.innerHTML = subsubstructure[n].title;
        rootNode.appendChild(filledChild_level_3);
        filledChild_level_3.classList.add('level-3');

        let iiiElement = document.createElement('i');
        iiiElement.classList.add('material-icons','folder-color');
        filledChild_level_3.prepend(iiiElement);

        if (subsubstructure[n].folder === true) {
          iiiElement.innerHTML = 'folder';

          filledChild_level_3.addEventListener('click', function() {
            console.log('level-3');
            emptyChild.classList.add('onclick');
          });

        } else {
          iiiElement.innerHTML = 'insert_drive_file';
          iiiElement.classList.add('file-color');
        }

        if (Array.isArray(subsubstructure[n].children) !== true && subsubstructure[n].folder === true) {
          emptyChild = document.createElement('div');
          emptyChild.innerHTML = 'Folder is empty';
          rootNode.appendChild(emptyChild);
          emptyChild.classList.add('level-empty');
          emptyChild.addEventListener('click', function() {
          console.log('level-empty');
          });
        }
        }
      }
    }
  }
}