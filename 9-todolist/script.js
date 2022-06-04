const btn = document.querySelector('#btn');
const todolist = document.querySelector('.todolist');
const writeMission = document.querySelector('#mission');


btn.addEventListener(`click`, clickedBtn)

function clickedBtn () {
  const li = document.createElement('li');
  li.textContent = getMission ();

 todolist.append(li);
 
}

function getMission () {
  
  return writeMission.value;
  
}

function isWriteValid(writeMission){
  if (writeMission == ''){
    
    return false;
  }
}


