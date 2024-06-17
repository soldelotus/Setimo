import React, { useState } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <>
      <Header />
      <section className="container-Login">
        <section className="login">
          <div className="texto-login">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
            <input
              name="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              name="Senha"
              value={formData.senha}
              onChange={handleChange}
              type="password"
              placeholder="Senha" 
            />
            <p>Esqueci a senha</p>
            </form>
          </div>
          <div className="btnLogin">
            <Link to="/Home"><Button className="btnPreenchido" variant="contained" size="medium">Entrar</Button></Link>
            <Link to="/cadastro"><Button className="btnVazado" variant="outlined" size="medium">Cadastre-se</Button></Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Login;
