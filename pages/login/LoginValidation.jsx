function Validation(values) {
  alert('');
  let error = {};
  const email_pattern = '/^[^s@]+@[^s@]+.[^s@]+%';
  const password_pattern = '/^(?=.*/d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/ ';

  if (values.email === '') {
    error.email = 'O nome do produto não deve estar vazio';
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email Didn't match";
  } else {
    error.email = '';
  }
  if (values.password === '') {
    error.password = 'Password should not be empty';
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password Didn't match";
  } else {
    error.password = '';
  }
  return error;
}

export default Validation;
