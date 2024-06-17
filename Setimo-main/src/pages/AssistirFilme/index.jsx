import React, { useState } from 'react';
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import { Button } from "@mui/material";
import { useParams, Link } from 'react-router-dom';
import videosData from '../../Video.json';

function AssistirFilme(){
    const { id } = useParams();
    const video = videosData.find(video => video.id === id);
    const [isVideoVisible, setVideoVisible] = useState(false);
   
    const handleAssistirClick = () => {
      setVideoVisible(true);
    };
   
    if (!video) {
      return <div>Vídeo não encontrado</div>;
    }  
    return(
        <>
        <Header/>
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
              {!isVideoVisible ? (
                <img src={video.thumbnail} alt={video.title} />
              ) : (
                <iframe
                  width="670"
                  height="450"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  frameBorder="0"
                  allowFullScreen
                  title={video.title}
                ></iframe>
              )}
            </div>
            </section>
            <section className="texto-filme">
            <h1 className="nomeDoFilme">{video.title}</h1>
            <p><b>Duração:</b> {video.time} minutos</p>
                <div className='info-filme'>
                <p><b>Direção:</b> {video.direcao}</p>
                <p><b>Ano Lançamento:</b> {video.anoLanc}</p>
                <p><b>Gênero:</b> {video.genero}</p>
               </div>
            <br />
            <p className="sinopse">{video.description}</p>
            <Button
              className="btnPreenchidoAssistir"
              variant="contained"
              size="medium"
              onClick={handleAssistirClick}
            >
              Assistir
            </Button>
            </section>
        </section>
        </section>
        <Footer/>
        </>
    )
}
export default AssistirFilme