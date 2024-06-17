import React, { useState } from 'react';
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function CriarFilme(){
    const [nome, setNome] = useState('');
    const [filme, setFilme] = useState('');
    
    const handleFocus = (setter, value) => {
        setter(value);
      };
    

    return(
        <>
        <Header/>

        <div className="imgSetaBtnCriar">
          <div className="titleVoltar">
            <Link to="/produtor"><img src="./fe_arrow-up.png" alt="" /></Link>
            <h1 className="tituloCriar">Criar Filme</h1>
          </div>
        </div>


        <section className="container-criar-filme">
        
        <div className="addCriarFilme">
            <p>Adicionar Capa do Filme</p>
            <br/>
            <img src="/iconAddFilme.svg" alt="" />
        </div>


        <section className="container-informacoes">

        <input
              name="Nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onFocus={() => handleFocus(setNome, nome)}
              type="text"
              placeholder="Nome"
            />

        <section className="container-categoria">
            <div className="select-categoria">
              <select className="categoria" name="categoria">
                <option value="Comedia">Comédia</option>
                <option value="Drama">Drama</option>
                <option value="Acao">Ação</option>
                <option value="ProducaoIndependente">Produção independente</option>
              </select>
            </div>
            </section>

            <section className="container-visibilidade">
            <div className="select-visibilidade">
              <select className="visibilidade" name="visibilidade">
                <option value="Privado">Privado</option>
                <option value="NaoListado">Não-Listado</option>
                <option value="Publico">Público</option>
              </select>
            </div>
            </section>


        </section>


    </section>
           
           
    <section className="container-subir-filme">
            <input
              name="Subir filme" 
              value={filme}
              onChange={(e) => setFilme(e.target.value)}
              onFocus={() => handleFocus(setFilme, filme)}
              type="file"
              placeholder="Subir filme"
            />

            <div className="btnConcluir">
            <Link to="/portfolio"><Button className="btnConcluirPreenchido" variant="contained" size="medium">Concluir</Button></Link>
            </div>
            </section>

        <Footer/>
        </>
    )
    }

export default CriarFilme