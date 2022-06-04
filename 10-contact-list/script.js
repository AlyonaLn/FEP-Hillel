const contactForm = document.querySelector('#addContactForm');
const inputs = document.querySelector('.formInput');
const contactList = document.querySelector('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').inerHTML;


contactForm.addEventListener(`submit`, oncontactBtnSubmit);


function oncontactBtnSubmit (e) {
  e.preventDefault();

  const contact = getContact();

  if(isContactValid(contact)){
    alert('Ошибка');
    return;
  }

  addNewContact(contact);

}


function getContact() {
  const contact = {};

  inputs.forEach(input => {
    contact[input.name] = input.value;
  })

  return contact;
}

function isContactValid(contact) {
  contact.name.trim() === ''
  || contact.surname.trim() === ''
  || contact.phone.trim() === ''
  || isNaN(contact.phone)
}


function addNewContact(contact){
  const contactItemHTML = contactItemTemplate

  .replace(`{{name}}`, contact.name)
  .replace(`{{surname}}`, contact.surname)
  .replace(`{{phone}}`, contact.phone);

  contactList.inerHTML +=  contactItemHTML;

}
