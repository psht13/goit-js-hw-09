const form = document.querySelector('.feedback-form');
const formData = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {
  email: '',
  message: '',
};
form.elements.email.value = formData.email; // присвоюю початкові значення при завантаженні
form.elements.message.value = formData.message;

form.addEventListener('input', () => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // завантажую у
});

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    // перевіряю на порожній ввід
    alert('Fill please all fields');
    return;
  }
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
