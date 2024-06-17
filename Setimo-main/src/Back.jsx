/*const olTarefas = document.getElementById("olTarefas");
const btCarregar = document.getElementById("btCarregar");
const inputTarefa = document.getElementById("inputTarefa");
const btAdicionar = document.getElementById("btAdicionar");
const cbNaoConcluidas = document.getElementById("cbNaoConcluidas");*/

import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Parse from 'parse';

const tarefaURL = "https://parseapi.back4app.com/classes/Cadastro";

const headers = {
  "X-Parse-Application-Id": "c7qOdeBrtMnYOetuIxsAFGelIEoO9SglDui47M7S",
  "X-Parse-REST-API-Key": "AgTqgwS6ZU7fQw4QutMGQBW0Q8FDGHpDdlVaZ5Uy",
}; //vai morrer

const headersJson = {
  ...headers,
  "Content-Type": "application/json",
}; //o json fica no front


function AssistirFilme() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const Movie = Parse.Object.extend('Movie');
      const query = new Parse.Query(Movie);
      try {
        const result = await query.first(); // Obtemos o primeiro filme como exemplo
        setMovie(result);
      } catch (error) {
        console.error('Error while fetching movie', error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      <Header />
      <section className="container-assistir">
        <div className="btnVoltarHome">
          <Link to="/home">
            <img src="/voltar.png" alt="Voltar" />
          </Link>
          <h1>Assistir</h1>
        </div>
        <section className="filme">
          <section className="ft-user">
            <div className="imgFilme">
              {movie && <img src={movie.get('imageUrl')} alt={movie.get('title')} />}
            </div>
          </section>
          <section className="texto-filme">
            <h1 className="nomeDoFilme">{movie ? movie.get('title') : 'Carregando...'}</h1>
            <p>{movie ? `${movie.get('duration')} minutos` : ''}</p>
            <div className="imgSetaBtnTrailer">
              <Button className="btnVazadoTrailer" variant="outlined" size="medium">
                <img src="./seta.svg" alt="" className="setaTrailer" />
                <div className="tituloTrailer">Trailer</div>
              </Button>
            </div>
            <br />
            <p className="sinopse">{movie ? movie.get('synopsis') : 'Carregando sinopse...'}</p>
            <Button className="btnPreenchidoAssistir" variant="contained" size="medium">
              Assistir
            </Button>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default AssistirFilme;

/*
const getTarefas = async () => {
  let url = tarefaURL;
  const naoConcluidas = cbNaoConcluidas.checked;
  if (naoConcluidas) {
    const whereClause = JSON.stringify({ concluida: false });
    url = `${url}?where=${whereClause}`;
    url = encodeURI(url);
    console.log("url", url);
  }
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const data = await response.json();
  return data.results;
};

const listarTarefas = async () => {
  const listaTarefas = await getTarefas();
  listaTarefas.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  olTarefas.innerHTML = "";
  for (let i = 0; i < listaTarefas.length; ++i) {
    const tarefa = listaTarefas[i];
    const li = document.createElement("li");
    const text = document.createTextNode(`${tarefa.descricao} - concluída: `);
    const cb = document.createElement("input");
    cb.name = tarefa.objectId;
    cb.type = "checkbox";
    cb.checked = tarefa.concluida;
    cb.onchange = () => handleChangeCBTarefa(cb, tarefa);
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.onclick = () => handleClickBtRemover(button, tarefa);
    li.appendChild(text);
    li.appendChild(cb);
    li.appendChild(button);
    olTarefas.appendChild(li);
  }
};

const handleChangeCBTarefa = async (cb, tarefa) => {
  cb.disabled = true;
  await fetch(`${tarefaURL}/${tarefa.objectId}`, {
    method: "PUT",
    headers: headersJson,
    body: JSON.stringify({ concluida: !tarefa.concluida }),
  });
  cb.disabled = false;
  listarTarefas();
};

const handleClickBtRemover = async (button, tarefa) => {
  button.disabled = true;
  await fetch(`${tarefaURL}/${tarefa.objectId}`, {
    method: "DELETE",
    headers: headers,
  });
  button.disabled = false;
  listarTarefas();
};


const adicionarTarefa = async () => {
  const descricao = inputTarefa.value;
  if (!descricao) {
    alert("Precisa digitar uma tarefa!");
    return;
  }
  btAdicionar.disabled = true;
  const response = await fetch(tarefaURL, {
    method: "POST",
    headers: headersJson,
    body: JSON.stringify({ descricao }),
  });
  btAdicionar.disabled = false;
  inputTarefa.value = "";
  inputTarefa.focus();
};




btCarregar.onclick = listarTarefas;
btAdicionar.onclick = adicionarTarefa;
cbNaoConcluidas.onchange = listarTarefas;*/