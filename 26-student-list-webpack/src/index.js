import StudentApi from "./StudentApi.js";
import './styles.css';

const btn = document.querySelector('#btn');
const studentlist = document.querySelector('#studentList');
const writeName = document.querySelector('#firstName');
const studentItemTemplate = document.querySelector('#studentItemTemplate').innerHTML;


btn.addEventListener(`click`, onBtnClick);
studentlist.addEventListener(`click`, onListClic);

init();

function init(){
  StudentApi
   .getList()
   .then(renderStudentList)
   .catch(handleError);
}


function onBtnClick () {
  const student = getStudents();

 if (!isMessageValid(student)){
  alert('Поле не должно быть пустым');
  return;
 }

 addStudentItem(student);

 clear();
}

function onListClic(e) {
  const studentItem = e.target.closest(`.studentItem`);

  if (studentItem) {
    if (e.target.classList.contains('deleteBtn')) {
      removeStudent(studentItem)
      return
    }
  }
}

function removeStudent(studentEl){
  const id = getStudentElId(studentEl);

  StudentApi
   .delete(id)
   .catch(handleError);
   studentEl.remove();
  
}

function getStudentElId (el) {
  return el.dataset.id;
}

function getStudents () {
  
  return {
    firstName: writeName.value,
  };
}

function isMessageValid(student) {
  return student.firstName.trim() !== '' 
}



function addStudentItem(student) {
  StudentApi
  .create(student)
  .catch(handleError);
 
  renderStudentItem(student);

}

function renderStudentItem(student){
  const studentItemHTML = genereteStudentHTML(student);
  
  studentlist.insertAdjacentHTML(`beforeend`, studentItemHTML);
}

function renderStudentList(studentList){
  const html = studentList.map(genereteStudentHTML).join('');

  studentlist.insertAdjacentHTML(`beforeend`, html);
}


function genereteStudentHTML(student) {
  return studentItemTemplate
  .replace(`{{id}}`, student.id)
  .replace(`{{firstName}}`, student.firstName)
}


function handleError(e){
  alert(e.message);
}

function  clear(){
  writeName.value = '';
}
