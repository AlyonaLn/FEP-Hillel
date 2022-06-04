const btn = document.querySelector('#btn');
const todolist = document.querySelector('#todolist');
const writeMission = document.querySelector('#mission');
const todoItemTemplate = document.querySelector('#todoItemTemplate');


btn.addEventListener(`click`, onBtnClick);
todolist.addEventListener(`click`, onListClic);

function onBtnClick () {
  const mission = getMission ();

 if (!isMessageValid(mission)){
  alert('Поле не должно быть пустым');
  return;
 }

 addTodoItem(mission);
 writeMission.value = '';
}

function onListClic(e) {

  const todoItem = e.target.closest(`.todoItem`);

  if (todoItem) {
    if (e.target.classList.contains('deleteBtn')) {
      return todoItem.remove();
    }
    e.target.classList.toggle('done');
  }
}

function getMission () {
  return writeMission.value;

}

function isMessageValid(mission) {
  return mission.trim() !== '';
}


function addTodoItem(mission) {
  const todoItemHTML = todoItemTemplate.innerHTML.replace(`{{message}}`, mission);
  
  todolist.insertAdjacentHTML(`beforeend`, todoItemHTML);
}

function clear() {
  
}


