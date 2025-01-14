import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './CadastroValidation';
import axios from 'axios';

const Cadastro = () => {
  const [values, setValues] = useState({
    name: '',
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
  //Gerencia o envio de Formulário de Cadastro

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios.post(
        'http://localhost:3000/cadastro',
        values.then((res) => navigate('/')).cath((err) => console.log(err)),
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              name="name"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger"> {errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger"> {errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Senha</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger"> {errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Cadastrar
          </button>
          <p>Já tem uma conta cadastrada?</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Logar
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
