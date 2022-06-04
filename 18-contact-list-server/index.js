import TodoApi from "./TodoApi.js";

const btn = document.querySelector('#btn');
const todolist = document.querySelector('#todolist');
const writeName = document.querySelector('#firstName');
const writeSurname = document.querySelector('#lastName');
const writePhone = document.querySelector('#phone');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;


btn.addEventListener(`click`, onBtnClick);
todolist.addEventListener(`click`, onListClic);

init();

function init(){
  TodoApi
   .getList()
   .then(renderTodoList)
   .catch(handleError);
}

function onBtnClick () {
  const contact = getMission();

 if (!isMessageValid(contact)){
  alert('Поле не должно быть пустым');
  return;
 }

 addTodoItem(contact);

 clear();
}

function onListClic(e) {
  const todoItem = e.target.closest(`.todoItem`);

  if (todoItem) {
    if (e.target.classList.contains('deleteBtn')) {
      removeTodo(todoItem)
      return
    }

    e.target.classList.toggle('done');
  }
}

function removeTodo(todoEl){
  const id = getTodoElId(todoEl);

  TodoApi
   .delete(id)
   .catch(handleError);
  todoEl.remove();
  
}

function getTodoElId (el) {
  return el.dataset.id;
}

function getMission () {
  
  return {
    createdAt: "2022-02-17T07:54:26.726Z",
    avatar: "https://cdn.fakercloud.com/avatars/tristanlegros_128.jpg",
    firstName: writeName.value,
    lastName: writeSurname.value,
    phone: writePhone.value,
  };
}

function isMessageValid(contact) {
  return contact.firstName.trim() !== '' 
}



function addTodoItem(contact) {
  TodoApi
  .create(contact)
  .catch(handleError);
 
  renderTodoItem(contact);

}

function renderTodoItem(contact){
  const todoItemHTML = genereteTodoHTML(contact);
  
  todolist.insertAdjacentHTML(`beforeend`, todoItemHTML);
}

function renderTodoList(todoList){
  const html = todoList.map(genereteTodoHTML).join('');

  todolist.insertAdjacentHTML(`beforeend`, html);
}


function genereteTodoHTML(contact) {
  return contactItemTemplate
  .replace(`{{id}}`, contact.id)
  .replace(`{{firstName}}`, contact.firstName)
  .replace(`{{lastName}}`, contact.lastName)
  .replace(`{{phone}}`, contact.phone);
}


function handleError(e){
  alert(e.message);
}

function  clear(){
  writeName.value = '';
  writeSurname.value = '';
  writePhone.value = '';
}
