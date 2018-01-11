
function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');

    if (!newToDoText.value) { return; }
    id++;
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    const title = document.createElement('span');

    toDoList.textContent = ''

    toDos.forEach(function(toDo) {
        const newLi = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.innerText = "Delete";
        newLi.appendChild(deleteButton);

<<<<<<< Updated upstream
        deleteButton.addEventListener('click', () => {
          event.preventDefault();
          toDoList.removeChild(newLi);
=======
        deleteButton.addEventListener('click', (event) => {
          event.preventDefault();
          //toDoList.removeChild(newLi);
>>>>>>> Stashed changes
          deleteToDo(toDo.id);
          renderTheUI();
        });

    });
  }

  function deleteToDo(id) {
<<<<<<< Updated upstream
    const filtered = toDos.filter(newLi => newLi.id !== id);
    if (toDos.filter()) {
      return true;
    } else return false;
=======
    toDos = toDos.filter(newLi => newLi.id !== id);

>>>>>>> Stashed changes
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
