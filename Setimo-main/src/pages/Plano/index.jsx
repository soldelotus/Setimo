import React from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";


function Plano() {
  return (
    <>
      <Header />
      <section className="plano">
      <section className="container-Plano">
        <div className="btnVoltar">
            <Link to="/produtor">
              <img src="/voltar.png" alt="Voltar" />
            </Link>
            <h1>Plano</h1>
        </div>
        <div className="plano-free plano-card">
            <div className="plano-titulo">
              <h2>Plano Free</h2>
            </div>
            <ul>
              <li>Portfolio</li>
              <li>Postar Vídeos de até 30 minutos</li>
              <li>Assistir a filmes de forma gratuita</li>
              <li>Alugar filmes</li>
            </ul>
        </div>
        <div className="plano-premium plano-card">
            <div className="plano-titulo">
              <h2>Plano Premium</h2>
            </div>
            <ul>
              <li>Portfolio</li>
              <li>Postar Vídeos sem limites de tempo</li>
              <li>Assistir a todos os filmes da plataforma</li>
            </ul>
            <div className="valorPlano">
              <h3>R$20,00</h3>
              <Button className="btnPreenchido" variant="contained" size="medium">Comprar plano</Button>
            </div>
        </div>
      </section>
      </section>
      <Footer />
    </>
  );
}

export default Plano;

