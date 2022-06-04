import ContactsApi from "./ContactsApi.js";

const CONTACT_ITEM_SELECTOR = '.contactItem';
const DELETE_BTN_SELECTOR = '.deleteBtn';
const EDIT_BTN_SELECTOR = '.editBtn';

const contactForm = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('input');
const contactListEl = document.querySelector('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;
let contactList = [];
let editContactId = null;
const $form = $('#contactModal form')[0];
const dialog = $( "#contactModal" ).dialog({
  autoOpen: false,
  height: 400,
  width: 350,
  modal: true,
  buttons: {
    Save: saveContact,
    Cancel: closeModal
  },
  close: closeModal
});

$('#addContactBtn').on('click', onAddContactBtnClick)
$('#contactList')
  .on('click',DELETE_BTN_SELECTOR,  onDeleteBtnClick)
  .on('click',EDIT_BTN_SELECTOR,  onEditBtnClick);

init();

function onDeleteBtnClick (e) {
  const id = getContactElId(e.target);
  removeContact(id);
}

function onEditBtnClick (e) {
  const id = getContactElId(e.target);
  const contact = findContact(id);
  
  openModal(contact);
}



function findContact(id) {
  return contactList.find(c => c.id === id);
}


function init() {
  ContactsApi.getList()
    .then(list => contactList = list)
    .then(renderContactList)
    .catch(handleError);
}

function onAddContactBtnClick  () {
  openModal();
}


function saveContact() {
  const contact = getContact();

  if(!isContactValid(contact)) {
    return handleError(new Error('Incorrect input data.'));
  }

  addContact(contact);
  closeModal();
}

function getContact() {
  const contact = {};

  inputs.forEach(input => {
    contact[input.name] = input.value;
  })

  return contact;
}

function isContactValid(contact) {
  return !isEmpty(contact.firstName)
    && !isEmpty(contact.lastName)
    && isPhone(contact.phone);
}

function isPhone(phone) {
  return !isEmpty(phone) && !isNaN(phone);
}

function isEmpty(str) {
  return typeof str === 'string' && str.trim() === '';
}

function fillContactForm(contact) {
  for (let prop in contact) {
    if ($form.elements.hasOwnProperty(prop)) {
      $form.elements[prop].value = contact[prop];
    }
  }
}

function addContact(contact) {
  if (contact.id) {
    ContactsApi
      .update(contact.id, contact)
      .catch(handleError);

    replaceContactEl(contact.id, contact);
    contactListUpdate(contact.id, contact);
  } else {
    ContactsApi
      .create(contact)
      .then((newContact) => {
        renderContact(newContact);
        contactListAdd(newContact);
      })
      .catch(handleError);
  }
}

function removeContact(id) {
  const contactEl = getContactElById(id);

  ContactsApi
    .delete(id)
    .catch(handleError);

  contactEl.remove();
}

function renderContactList(contacts) {
  const html = contacts.map(getContactHTML).join('');

  contactListEl.innerHTML = html;
}

function renderContact(contact) {
  contactListEl.insertAdjacentHTML('beforeend', getContactHTML(contact));
}

function replaceContactEl(id, contact) {
  const oldContactEl = getContactElById(id);
  const newContactEl = createContactEl(contact);

  oldContactEl.replaceWith(newContactEl);
}

function contactListUpdate(id, contact) {
  const oldContact = contactList.find(c => c.id === id);

  Object.keys(contact).forEach(key => oldContact[key] = contact[key]);
}

function contactListAdd(contact) {
  contactList.push(contact);
}

function createContactEl(contact) {
  const table = document.createElement('table');

  table.innerHTML = getContactHTML(contact);

  return table.querySelector(CONTACT_ITEM_SELECTOR);
}

function getContactHTML(contact) {
  let contactItemHTML = contactItemTemplate;

  for (let prop in contact) {
    contactItemHTML = contactItemHTML.replace(`{{${prop}}}`, contact[prop]);
  }

  return contactItemHTML;
}

function getContactElById(id) {
  return contactListEl.querySelector(`[data-id="${id}"]`);
}

function getContactElId(el) {
  return el.closest(CONTACT_ITEM_SELECTOR).dataset.id;
}

function handleError(e) {
  alert(e.message);
}

function openModal (contact = {}) {
  fillContactForm(contact);
  dialog.dialog( "open" );
}

function closeModal () {
  $form.reset();
  dialog.dialog( "close" );
}