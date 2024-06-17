import React, { useState } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    senha: '',
    tipoConta: 'Produtor',
    plano: 'Gratuito'
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
      <section className="container-cadastro">
        <section className="cadastro">
          <div className="campos-cadastro">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
            <input
              name="Nome"
              value={formData.nome}
              onChange={handleChange}
              type="text"
              placeholder="Nome"
            />
            <input
              name="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
            />
            <input
              name="Celular"
              value={formData.celular}
              onChange={handleChange}
              type="text"
              placeholder="Celular"
            />
            <input
              name="Senha"
              value={formData.senha}
              onChange={handleChange}
              type="password"
              placeholder="Senha"
            />
            <div className="select-cadastro">
            <select
                  className="tipo-conta"
                  name="tipoConta"
                  value={formData.tipoConta}
                  onChange={handleChange}
                >
                <option value="Produtor">Produtor</option>
                <option value="Espectador">Espectador</option>
            </select>
              <select className="select-plano"
              name="plano"
              value={formData.plano}
              onChange={handleChange}
              >
                <option value="Gratuito">Gratuito</option>
                <option value="Pago">Pago</option>
              </select>
            </div>
              </form>
          </div>
          <div className="btnCadastro">
            <Link to="/login"><Button className="btnPreenchido" variant="contained" size="medium">Login</Button></Link>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Cadastro;
