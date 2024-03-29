import './assets/modulepreload-polyfill-3cfb730f.js';
const e = document.querySelector('.feedback-form'),
  t = 'feedback-form-state',
  l = JSON.parse(localStorage.getItem(t));
l &&
  ((e.elements.email.value = l.email || ''),
  (e.elements.message.value = l.message || ''));
e.addEventListener('input', () => {
  const a = {
    email: e.elements.email.value.trim(),
    message: e.elements.message.value.trim(),
  };
  localStorage.setItem(t, JSON.stringify(a));
});
e.addEventListener('submit', a => {
  if (
    (a.preventDefault(),
    e.elements.email.value === '' || e.elements.message.value === '')
  ) {
    console.log('Please fill in both email and message fields');
    return;
  }
  console.log('Data submitted:', JSON.parse(localStorage.getItem(t))),
    e.reset(),
    localStorage.removeItem(t);
});
//# sourceMappingURL=commonHelpers2.js.map
