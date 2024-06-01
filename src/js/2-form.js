const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};
form.elements.email.value = formData.email.trim(); // присвоюю початкові значення при завантаженні
form.elements.message.value = formData.message.trim();

form.addEventListener('input', () => {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // завантажую у сховище
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    // перевіряю на порожній ввід
    alert('Fill please all fields');
    return;
  }
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
