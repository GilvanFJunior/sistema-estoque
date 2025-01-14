import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:3000/login', values)
        .then((res) => {
          if (res.data === 'Logado com Sucesso') {
            navigate('/home');
          } else {
            alert('Este login não existe');
          }
        })
        .cath((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="senha">
              <strong>Email</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Senha"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <p>Não possui conta?</p>
          <Link
            to="/cadastro"
            className="btn btn-default border w-100 bg-light"
          >
            Registre-se
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

/*
const handleChange = (event) => {
  setValues({ ...values, [event.target.name]: [event.target.value] });
};

const handleSubmit = (event) => {
  event.preventDefault();
  axios
    .post('http://localhost:3000/cadastro', values)
    .then((res) => console.log('Registrado com sucesso!'))
    .catch((err) => console.log(err));
};
*/
