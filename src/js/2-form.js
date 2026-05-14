let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localKey = 'feedback-form-state';
const localDate = JSON.parse(localStorage.getItem(localKey));

if (localStorage.getItem(localKey)) {
  formData.email = localDate.email;
  formData.message = localDate.message;
}

form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', handlerInput);

function handlerInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(localKey, JSON.stringify(formData));
}

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(localKey);
  event.currentTarget.reset();
  formData = { email: '', message: '' };
}

console.log('FORM');
